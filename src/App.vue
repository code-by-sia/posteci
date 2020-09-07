<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RequestEditor from "@/components/RequestEditor.vue";
import Domains from "@/components/DomainsEditor.vue";
import DimensionsEditor from "@/components/DimensionsEditor.vue";
import HttpRequest from "@/model/httpRequest";
import VariableSet from "@/model/variableSet";
import VariableSetEditor from "@/components/VariableSetEditor.vue";
import VariableSetKey from "@/model/variableSetKey";
import Environment from "@/model/environment";
import RequestBuilder from "@/core/RequestBuilder";
import Domain from "@/model/domain";
import Toolbar from "@/components/Toolbar.vue";
import PreferencesDialog from "@/components/PreferencesDialog.vue";
import LoadDataDialog from "@/components/LoadDataDialog.vue";
import SaveDataDialog from "@/components/SaveDataDialog.vue";
import PosteciFile from "./model/posteci/file";
import Dimension from "@/model/dimension";

@Component({
  components: {
    SaveDataDialog,
    LoadDataDialog,
    PreferencesDialog,
    Toolbar,
    DimensionsEditor,
    VariableSetEditor,
    RequestEditor,
    Domains,
  },
})
export default class App extends Vue {
  dimensions: Dimension[] = [];
  domains: Domain[] = [];

  request: HttpRequest | null = null;

  environment: Environment = new Environment();

  dimensionKey: VariableSetKey = {};

  variableEditorVisible: boolean = false;
  dimensiobEditMode: boolean = false;

  variableSet: VariableSet | null = null;

  response: any | null = null;

  private dialogs = {
    PREFERENCES: "PREFERENCES",
    ERROR: "ERROR",
    RESPONSE: "RESPONSE",
    LOAD: "LOAD",
    SAVE: "SAVE",
    HIDE: "NONE",
  };

  dialog: string = this.dialogs.HIDE;
  readyToShow: boolean = false;

  loadData(file: PosteciFile) {
    this.dimensions = file.data.dimensions;
    this.domains = file.data.domains;
    this.environment = new Environment(file.data.variableSets);
  }

  saveData(fn: any) {
    fn.commit({
      metadata: {
        version: 1,
        ui: {},
      },
      data: {
        dimension: JSON.parse(JSON.stringify(this.dimensions)),
        domains: JSON.parse(JSON.stringify(this.domains)),
        variableSets: this.environment.exportVariableSets(),
      },
    });
  }

  onFilterKetChange(newKey: VariableSetKey) {
    this.variableSet = this.environment.findOrCreate(newKey);
    this.dimensionKey = newKey;
  }

  pickRequest(request: HttpRequest) {
    this.variableSet = null;
    if (request !== this.request) {
      this.response = null;
    }
    this.request = request;
  }

  editDimensions() {
    this.dimensiobEditMode = true;
  }

  showVariableEditor() {
    this.variableEditorVisible = !this.variableEditorVisible;
    this.variableSet = this.environment.findOrCreate(this.dimensionKey);
  }

  async tryJson(response: Response) {
    try {
      return await response.json();
    } catch {
      return await response.text();
    }
  }

  async onSend(requset: HttpRequest) {
    const variables = this.environment.buildFor(this.dimensionKey);
    try {
      const response = await RequestBuilder.with(requset)
        .withVariables(variables)
        .build();

      const headers = response.headers;
      const bodyContent = await this.tryJson(response);

      this.response = {
        url: response.url,
        headers: response.headers,
        status: response.status,
        body: bodyContent,
      };
    } catch (e) {
      this.response = {
        body: e.message,
      };
    }
  }

  updateVariableSet() {
    this.environment.update(this.variableSet);
  }

  createDomain() {
    let newDomain: Domain = {
      name: "New Domain",
      requests: [],
    };
    this.domains = [...this.domains, newDomain];
  }

  showDialog(name: string) {
    this.dialog = name;
  }

  hideDialog() {
    this.readyToShow = false;
  }
}
</script>
<template>
  <div id="app">
    <transition name="fade" @after-enter="readyToShow=true">
      <div class="dialogs" v-if="dialog!== dialogs.HIDE" @click.self="readyToShow=false">
        <transition name="bounce" @after-leave="dialog = dialogs.HIDE">
          <preferences-dialog
            v-if="dialog === dialogs.PREFERENCES && readyToShow"
            @close="hideDialog"
          />
          <load-data-dialog
            v-if="dialog === dialogs.LOAD && readyToShow"
            @close="hideDialog"
            @load-data="loadData"
          />
          <save-data-dialog
            v-if="dialog === dialogs.SAVE && readyToShow"
            @close="hideDialog"
            @save-data="saveData"
          />
        </transition>
      </div>
    </transition>
    <domains v-model="domains" @onRequestSelect="pickRequest" @onRequestNew="createDomain">
      <Toolbar
        @load-data="showDialog(dialogs.LOAD)"
        @save-data="showDialog(dialogs.SAVE)"
        @show-preferences="showDialog(dialogs.PREFERENCES)"
      />
    </domains>
    <div class="container">
      <dimensions-editor
        v-model="dimensions"
        @show-hide="showVariableEditor"
        @edit-dimensions="editDimensions"
        @selection-changed="onFilterKetChange"
      />
      <variable-set-editor
        v-if="variableEditorVisible && variableSet"
        v-model="variableSet"
        @change="updateVariableSet"
      />
      <request-editor v-model="request" :response="response" @send="onSend(request)" />
    </div>
  </div>
</template>
<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

#app {
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex: 1;

  .domains {
    border-right: solid thin #cccccc;
    min-width: 300px;
  }

  .request-editor,
  .variable-set-editor {
    flex: 1;
  }

  .container {
    background: #eee;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .dialogs {
    position: absolute;
    background: rgba(0, 0, 25, 0.4);
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 128px 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: 100%;
      max-width: 1024px;
      min-height: 500px;
    }
  }
}
</style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import RequestEditor from '@/components/RequestEditor.vue'
import Domains from '@/components/DomainsEditor.vue'
import Dimensions from '@/components/DimensionsEditor.vue'
import testVariableSets from './data/variables'
import testDomains from './data/domains'
import testDimensions from './data/dimensions'
import HttpRequest from '@/model/httpRequest'
import VariableSet from '@/model/variableSet'
import VariableSetEditor from '@/components/VariableSetEditor.vue'
import VariableSetKey from '@/model/variableSetKey'
import Environment from '@/model/environment'
import RequestBuilder from '@/core/RequestBuilder';
import Domain from '@/model/domain';
import Toolbar from '@/components/Toolbar.vue';
import PreferencesDialog from '@/components/PreferencesDialog.vue';
import LoadDataDialog from '@/components/LoadDataDialog.vue';
import SaveDataDialog from '@/components/SaveDataDialog.vue';

@Component({
  components: {
    SaveDataDialog,
    LoadDataDialog,
    PreferencesDialog,
    Toolbar,
    VariableSetEditor,
    RequestEditor,
    Dimensions,
    Domains
  },
})
export default class App extends Vue {
  dimensions = testDimensions
  domains = testDomains

  request: HttpRequest | null = null

  environment: Environment = new Environment(testVariableSets)

  dimensionKey: VariableSetKey = {}

  variableEditorVisible: boolean = false

  variableSet: VariableSet | null = null

  private dialogs = {
    PREFERENCES: 'PREFERENCES',
    ERROR: 'ERROR',
    RESPONSE: 'RESPONSE',
    LOAD: 'LOAD',
    SAVE: 'SAVE',
    HIDE: 'NONE'
  }

  dialog: string = this.dialogs.HIDE
  readyToShow: boolean = false

  onFilterKetChange(newKey: VariableSetKey) {
    this.variableSet = this.environment.findOrCreate(newKey)
    this.dimensionKey = newKey
  }

  pickRequest(request: HttpRequest) {
    this.variableSet = null
    this.request = request
  }

  showVariableEditor() {
    this.variableEditorVisible = !this.variableEditorVisible
    this.variableSet = this.environment.findOrCreate(this.dimensionKey)
  }

  onSend(requset: HttpRequest) {
    const variables = this.environment.buildFor(this.dimensionKey);
    const request = RequestBuilder.with(requset).withVariables(variables).build();
  }

  updateVariableSet() {
    this.environment.update(this.variableSet)
  }

  createDomain() {
    let newDomain: Domain = {
      name: 'New Domain', requests: []
    };
    this.domains = [...(this.domains), newDomain]
  }

  showDialog(name: string) {
    this.dialog = name
  }

  hideDialog() {
    this.readyToShow = false
  }
}
</script>
<template>
  <div id="app">
    <transition name="fade" @after-enter="readyToShow=true">
      <div class="dialogs" v-if="dialog!== dialogs.HIDE" @click.self="readyToShow=false">
        <transition name="bounce" @after-leave="dialog = dialogs.HIDE">
          <preferences-dialog v-if="dialog === dialogs.PREFERENCES && readyToShow" @close="hideDialog"/>
          <load-data-dialog v-if="dialog === dialogs.LOAD && readyToShow" @close="hideDialog"/>
          <save-data-dialog v-if="dialog === dialogs.SAVE && readyToShow" @close="hideDialog"/>
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
      <dimensions
          v-model="dimensions"
          @showHide="showVariableEditor"
          @selection-changed="onFilterKetChange"
      />
      <variable-set-editor
          v-if="variableEditorVisible && variableSet"
          v-model="variableSet"
          @change="updateVariableSet"
      />
      <request-editor
          v-model="request"
          @send="onSend(request)"
      />
    </div>
  </div>
</template>
<style lang="scss">
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
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

  .request-editor, .variable-set-editor {
    flex: 1;
    border-top: dashed thin #ccc;
  }

  .container {
    background: #eee;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .dialogs {
    position: absolute;
    background: rgba(0, 0, 25, .4);
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 100px;
    z-index: 1000;
    display: flex;
    justify-content: center;

    > div {
      width: 100%;
    }

  }
}
</style>

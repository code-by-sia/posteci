<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HttpRequest from "@/model/httpRequest";
import HeadersEditor from "@/components/HeaderEditor.vue";
import BodyEditor from "@/components/BodyEditor.vue";
import UrlEditor from "@/components/UrlEditor.vue";
import ActionLink from "@/components/ActionLink.vue";

@Component({
  name: "request-editor",
  components: {
    HeadersEditor,
    ActionLink,
    BodyEditor,
    UrlEditor,
  },
})
export default class RequestEditor extends Vue {
  @Prop({ required: true })
  private value!: HttpRequest;

  @Prop()
  private response?: {
    status?: number;
    body: any;
    url?: string;
    headers?: any[];
  };
}
</script>
<template>
  <div class="request-editor" v-if="value">
    <div class="request-editor-header-and-body">
      <headers-editor v-model="value.headers" />
      <body-editor v-model="value.body">
        <label class="method-editor">
          <span>Method:</span>
          <input type="text" v-model="value.method" />
          <action-link icon="🍪" value="Cookie Manager" />
        </label>
      </body-editor>
    </div>
    <url-editor class="request-editor-url" v-model="value" @send="$emit('send')" />
    <div class="response-viewer" v-if="response">
      <div class="response-viewer-header">
        <div class="response-info">
          <strong>URL:</strong>
          <span>{{response.url}}</span>
          <strong>Status:</strong>
          {{response.status}}
        </div>
      </div>
      <pre>{{response.body}}</pre>
    </div>
  </div>
  <div class="request-editor-empty" v-else>
    <i>📭 Empty</i>
    <span>there is no request selected</span>
  </div>
</template>
</template>

<style lang="scss" scoped>
.request-editor {
  display: flex;
  flex-direction: column;

  &-header-and-body {
    flex: 1;
    display: flex;
    flex-direction: row;

    .headers-editor {
      background: #fefefe;
      border-right: double 3px #cccccc;
    }
  }

  &-empty {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: white;
    align-items: center;
    justify-content: center;

    span {
      font-size: 16px;
      letter-spacing: 8px;
      text-transform: uppercase;
    }

    i {
      font-size: 128px;
      font-style: normal;
    }
  }

  .method-editor {
    display: flex;
    align-content: center;

    height: 26px;
    padding: 5px;
    border-bottom: #400377 thin solid;

    span {
      font-weight: bold;
      text-transform: uppercase;
      align-self: center;
      min-width: 100px;
      font-size: 0.8em;
    }

    input {
      min-width: 200px;
      text-indent: 5px;
    }
  }
}

.response-viewer {
  flex: 1;
  text-align: left;
  max-height: 50vh;
  overflow: scroll;
  background: #ffffff;
  border: solid thin;
  &-header {
    padding: 10px;
    position: sticky;
    top: 0;
    background: linear-gradient(#fff, #fcfcfc);
    border-bottom: dotted thin #c5c5c5;
    .response-info {
      display: flex;
      span {
        flex: 1;
      }
      strong {
        padding: 0 10px;
      }
    }
  }
  pre {
    padding: 5px;
  }
}
</style>

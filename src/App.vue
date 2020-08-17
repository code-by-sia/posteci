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

    @Component({
        components: {
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

        dimensionKey: VariableSetKey = {};

        variableEditorVisible: boolean = false;

        variableSet: VariableSet | null = null

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
    }
</script>
<template>
    <div id="app">
        <domains v-model="domains" @onRequestSelect="pickRequest"/>
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
    }
</style>

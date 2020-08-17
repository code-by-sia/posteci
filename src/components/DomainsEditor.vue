<script lang="ts">
    import ActionLink from '@/components/ActionLink.vue';
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Toolbar from '@/components/Toolbar.vue';
    import HttpRequest from '@/model/httpRequest';

    @Component({
        name: 'Domains',
        components: {Toolbar, ActionLink}
    })
    export default class App extends Vue {

        ui: any = {
            domains: {},
            selected: null
        }

        @Prop()
        private value!: any[];

        clearSelect() {
            this.selectRequest(null)
        }

        selectRequest(request: null | HttpRequest) {
            this.$emit('onRequestSelect', request)
            this.ui.selected = request
        }

        toggleDomainUI(name: any) {
            const current = this.ui.domains[name] || {}
            current.open = !current.open
            this.$set(this.ui.domains, name, current)
        }
    }
</script>
<template>
    <div class="domains">
        <h4 @click="clearSelect">Domains</h4>
        <Toolbar/>
        <div class="list">
            <div class="domain" v-for="domain in value" :key="domain.name">
                <action-link icon="🗂" :value="domain.name" @click="toggleDomainUI(domain.name)"></action-link>
                <div v-if="ui.domains[domain.name] && ui.domains[domain.name].open">
                    <action-link
                            icon="✉️"
                            :value="request.name"
                            :key="index"
                            v-for="(request, index) in domain.requests"
                            :class="{selected: (ui.selected == request)}"
                            @click="selectRequest(request)"
                    >
                        <span class="method" :class="request.method.toLowerCase()">{{request.method }}</span>
                    </action-link>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    .domains {
        display: flex;
        flex-direction: column;

        h4 {
            cursor: pointer;
        }

        min-width: 200px;

        .list {
            background: #fefefe;
            flex: 1;
        }

        .selected {
            background: #000000;
            color: #ffffff;
        }

        .method {
            display: block;
            color: yellow;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            line-height: 12px;
            min-width: 48px;
            margin-right: 4px;

            &.post {
                color: #ff5722;
            }

            &.put {
                color: #2196f3;
            }

            &.patch {
                color: #9e9e9e;
            }

            &.get {
                color: #009688;
            }

            &.delete {
                color: #e91e63;
            }
        }
    }
</style>

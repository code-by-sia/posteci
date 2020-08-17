<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Dimension from '@/model/dimension';
    import dimensions from '@/data/dimensions';
    import VariableSetKey from '@/model/variableSetKey';
    import ActionLink from '@/components/ActionLink.vue';

    @Component({
        name: 'dimensions',
        components: {
            ActionLink
        }
    })
    export default class Dimensions extends Vue {
        @Prop()
        private value!: Dimension[];

        filterKey: VariableSetKey = {}

        beforeMount() {
            for (let dimension of dimensions) {
                this.filterKey[dimension.name] = '*';
            }
        }

        mounted() {
            this.updateSelection();
        }

        private updateSelection() {
            this.$emit('selection-changed', this.filterKey)
        }
    }
</script>
<template>
    <div class="dimensions-editor">
        <div class="header">
            <div class="title">Dimensions</div>
        </div>
        <div class="tools">
            <action-link @click="$emit('showHide')" icon="🧭" value="Show/hide vars"/>
        </div>
        <div class="dimensions">
            <div v-for="dimension in value" class="dimension">
                <label>{{dimension.name}}</label>
                <label>
                    <select v-model="filterKey[dimension.name]" @change="updateSelection">
                        <option value="*"> &times; ALL &times;</option>
                        <option v-for="(dimensionOption,index) in dimension.values"
                                :value="dimensionOption"
                                :key="index"
                        >
                            {{dimensionOption}}
                        </option>
                    </select>
                </label>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scopped>
    .dimensions-editor {
        background: #fff;
        height: 110px;
        padding: 0;
        display: flex;

        .header {
            background: #a80000;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;

            div.title {
                color: white;
                width: 100px;
                height: 20px;
                transform: rotate(270deg);
                font-weight: 700;
            }
        }

        .tools {
            border-right: dotted 1px #cccccc;
            width: 150px;
            padding: 5px;
            display: flex;

            .link {
                flex: 1;
            }
        }

        .dimensions {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 7px 0;

            .dimension {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                margin-left: 10px;

                label {
                    color: #111;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: .7em;
                }

                select {
                    min-width: 128px;
                    text-transform: uppercase;
                    padding: 4px;
                }

            }
        }
    }
</style>

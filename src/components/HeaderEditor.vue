<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component({name: 'headers'})
    export default class Headers extends Vue {

        @Prop()
        private value!: { name: string, value: string }[]

        addNewHeader() {
            const newValue = [...(this.value), {name: '', value: ''}]
            this.$emit('input', newValue)
        }

        deleteHeader(header: any) {
            const newValue = this.value.filter(item => item !== header)
            this.$emit('input', newValue)
        }
    }
</script>
<template>
    <div class="headers-editor">
        <h4>Headers</h4>
        <div class="table">
            <div class="row" v-for="(header,index) in value" :key="index">
                <input v-model="header.name"/>
                <input v-model="header.value"/>
                <button class="action" @click="deleteHeader(header)">&times;</button>
            </div>
            <div class="actions">
                <button @click="addNewHeader"> ➕ &nbsp; Add Header</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .headers-editor {
        min-width: 360px;
        background: #fafafa;

        h4 {
            border-bottom: solid thin #ccc;
            padding: 12px;
            margin: 0;

        }

        .table {
            display: flex;
            flex-direction: column;

            .row {
                display: flex;
                border-bottom: dotted thin;

                input {
                    flex: 1;
                    border: none;
                    appearance: none;
                    padding: 10px;

                    &:first-child {
                        background: #efefef;
                    }
                }

                .action {
                    border: none;
                    background: white;
                    width: 32px;
                }

                &:hover {
                    * {
                        font-weight: bold;
                    }
                }
            }

            .actions {
                display: flex;
                padding: 5px;

                button {
                    border: none;
                    background: none;
                    padding: 5px;
                    font-weight: bold;
                    border: solid 2px transparent;
                    border-radius: 2px;

                    &:hover {
                        border-color: #2d7dd2;
                    }
                }
            }
        }
    }
</style>

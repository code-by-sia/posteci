<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({name: 'request-body'})
    export default class Body extends Vue {
        @Prop()
        private value!: string;

        get content() {
            return this.value
        };

        set content(value: string) {
            this.$emit('input', value)
        }
    }
</script>
<template>
    <div class="body">
        <slot></slot>
        <textarea v-model="content"></textarea>
    </div>
</template>
<style lang="scss" scoped>
    .body {
        flex: 1;
        display: flex;
        flex-direction: column;

        textarea {
            border: none;
            display: flex;
            flex: 1;
            padding: 10px;
            font-family: "JetBrains Mono", monospace;
        }
    }
</style>

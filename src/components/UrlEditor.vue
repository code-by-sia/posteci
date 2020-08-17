<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import HttpRequest from '@/model/httpRequest';

    @Component({name: 'UrlEditor'})
    export default class UrlEditor extends Vue {
        @Prop()
        private value!: HttpRequest
    }
</script>
<template>
    <div class="url-editor">
        <input class="protocol" v-model="value.protocol"/>
        <span>://</span>
        <input class="url" v-model="value.path"/>
        <button class="send" @click="$emit('send')">Send</button>
    </div>
</template>

<style lang="scss" scoped>
    .url-editor {
        font-size: 1.2em;
        font-family: monospace;
        min-height: 48px;
        display: flex;
        border-top: solid thin #ccc;
        background: #fff;
        align-items: center;
        justify-content: space-between;

        input, span, .send {
            border: none;
            background: none;
            line-height: 2em;
            font-family: monospace;
        }

        .protocol {
            width: 100px;
            text-align: right;
            text-transform: lowercase;
            letter-spacing: 2px;
            font-size: 16px;
            margin-left: 7px;

            &:focus {
                text-transform: none;
                text-align: center;
            }
        }

        .url {
            flex: 1;
            font-size: 16px;
            letter-spacing: 2px;
        }

        .send {
            font-family: sans-serif;
            font-size: 1em;
            padding: 0 25px;
            margin: 5px 8px 5px 5px;
            background: #283593;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            box-shadow: 1px 1px 2px #eeeeee;
        }
    }
</style>

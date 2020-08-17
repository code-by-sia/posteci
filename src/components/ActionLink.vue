<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({name: 'Link'})
    export default class ActionLink extends Vue {
        @Prop({default: () => ''})
        private icon!: string

        @Prop({required: true})
        private value!: string

    }
</script>
<template>
    <a class="link" href="#" @click="$emit('click')">
        <i v-if="icon" class="icon">{{icon}}</i>
        <slot/>
        <span>{{value}}</span>
    </a>
</template>

<style lang="scss" scoped>
    .link {
        display: flex;
        align-items: center;
        justify-items: center;
        margin: 5px;
        border-radius: 3px;
        padding: 2px 0;
        font-size: 14px;

        text-decoration: none;
        color: #333;

        i {
            font-style: normal;
            min-width: 32px;
        }

        &:hover {
            background: #eeeeee;
        }
    }
</style>

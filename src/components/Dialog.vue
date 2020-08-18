<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({name: 'Dialog'})
export default class Dialog extends Vue {
  @Prop()
  private icon?: string

  @Prop()
  private title!: string

}
</script>
<template>
  <div class="dialog">
    <header>
      {{ icon }}
      <strong>{{ title }}</strong>
      <span @click="$emit('close')">&times;</span>
    </header>
    <slot></slot>
    <span class="overlay">{{icon}}</span>
  </div>
</template>
<style scoped lang="scss">
.dialog {
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  border-radius: 4px;
  box-shadow: 0 2px 2px #555, 0 3px 2px #888, 0 -2px 4px #fff inset;
  padding-bottom: 5px;
  overflow: hidden;
  position: relative;

  header {
    background: white;
    display: flex;
    font-size: 16px;
    padding: 12px;
    border-bottom: solid thin #cccccc;
    text-align: left;
    box-shadow: 0 0 2px #cccccc;
    align-items: center;

    strong {
      font-size: 1em;
      padding: 0 20px;
      flex: 1;
    }

    span {
      cursor: pointer;
      border-radius: 4px;
      padding: 0 10px;
      line-height: 1em;
      font-size: 2em;

      &:hover {
        background: #eee;
        color: maroon;
      }
    }
  }
  .overlay {
    position: absolute;
    bottom: -80px;
    right: 0;
    font-size: 256px;
    opacity: 0.05;
    transform: rotate(-15deg);
  }
}
</style>

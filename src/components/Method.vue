<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Method extends Vue {
  @Prop()
  private value!: string;
}
</script>
<template>
  <span
      class="method"
      :class="value.toLocaleLowerCase()"
  >
    {{ value }}
  </span>
</template>
<style lang="scss" scoped>
.method {
  display: block;
  color: orchid;
  font-size: 12px;
  font-weight: 800;
  text-align: left;
  text-transform: uppercase;
  line-height: 12px;
  min-width: 28px;
  margin: 0 10px;

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
</style>

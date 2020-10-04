<script lang="ts">
import Dimension from "@/model/dimension";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "dimension-editor",
})
export default class DimensionEditor extends Vue {
  @Prop({ required: true })
  private value!: any;

  @Prop({ required: true })
  private dimension!: Dimension;

  @Prop({ default: () => false })
  private editMode!: boolean;

  dimensionChange(n) {
    this.$emit("update", {
      name: this.dimension.name,
      values: n.target.value.split("\n"),
    });
  }
  onDimensionNameChanged(n) {
    this.$emit("update", {
      oldName: this.dimension.name,
      name: n.target.value,
      values: this.dimension.values,
    });
  }
  updateSelection(e) {
    this.$emit("input", e.target.value);
    this.$emit("change");
  }
}
</script>
<template>
  <div class="dimension-editor">
    <label v-if="!editMode">{{ dimension.name }}</label>
    <input v-else :value="dimension.name" @change="onDimensionNameChanged" />
    <label v-if="!editMode">
      <select value="value" @change="updateSelection">
        <option value="*">*</option>
        <option
          v-for="(dimensionOption, index) in dimension.values"
          :value="dimensionOption"
          :key="index"
        >
          {{ dimensionOption }}
        </option>
      </select>
    </label>
    <textarea
      v-else
      :value="dimension.values.join('\n')"
      @change="dimensionChange"
    ></textarea>
  </div>
</template>
<style lang="scss" scoped>
.dimension-editor {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;

  label {
    color: #111;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7em;
  }

  select {
    min-width: 128px;
    background-color: white;
    border: thin solid #ccc;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) calc(1em + 2px),
      calc(100% - 10px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;

    text-transform: uppercase;

    &:focus {
      background-image: linear-gradient(45deg, #555 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, #555 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 10px) 1em, calc(100% - 15px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      border-color: #444;
      outline: 0;
    }

    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }
}
</style>
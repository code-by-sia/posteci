<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dimension from "@/model/dimension";
import dimensions from "@/data/dimensions";
import VariableSetKey from "@/model/variableSetKey";
import ActionLink from "@/components/ActionLink.vue";

@Component({
  name: "dimensions-editor",
  components: {
    ActionLink,
  },
})
export default class DimensionsEditor extends Vue {
  @Prop()
  private value!: Dimension[];

  filterKey: VariableSetKey = {};

  beforeMount() {
    for (let dimension of dimensions) {
      this.filterKey[dimension.name] = "*";
    }
  }

  mounted() {
    this.updateSelection();
  }

  private updateSelection() {
    this.$emit("selection-changed", this.filterKey);
  }
}
</script>
<template>
  <div class="dimensions-editor">
    <div class="header">
      <div class="title">Dimensions</div>
    </div>
    <div class="tools">
      <action-link @click="$emit('show-hide')" icon="🧭" value="Show/hide vars" />
      <action-link @click="$emit('edit-dimensions')" icon="📈" value="Edit dimensions" />
    </div>
    <div class="dimensions">
      <div v-for="dimension in value" :key="dimension.name" class="dimension">
        <label>{{ dimension.name }}</label>
        <label>
          <select v-model="filterKey[dimension.name]" @change="updateSelection">
            <option value="*">*</option>
            <option
              v-for="(dimensionOption,index) in dimension.values"
              :value="dimensionOption"
              :key="index"
            >{{ dimensionOption }}</option>
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
  border-bottom: solid thin #ccc;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    border-right: dotted thin #eeeeee;

    div.title {
      width: 100px;
      height: 16px;
      transform: rotate(270deg);
      font-weight: 700;
    }
  }

  .tools {
    border-right: dotted 1px #cccccc;
    width: 150px;
    padding: 5px;
    display: flex;
    flex-direction: column;

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
  }
}
</style>

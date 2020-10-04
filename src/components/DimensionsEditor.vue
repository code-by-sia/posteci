<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dimension from "@/model/dimension";
import dimensions from "@/data/dimensions";
import VariableSetKey from "@/model/variableSetKey";
import ActionLink from "@/components/ActionLink.vue";
import DimensionEditor from "@/components/DimensionEditor.vue";

@Component({
  name: "dimensions-editor",
  components: {
    ActionLink,
    DimensionEditor,
  },
})
export default class DimensionsEditor extends Vue {
  @Prop()
  private value!: Dimension[];

  filterKey: VariableSetKey = {};

  editMode = false;

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

  saveChanges() {
    this.editMode = false;
  }
}
</script>
<template>
  <div class="dimensions-editor">
    <div class="header">
      <div class="title">Dimensions</div>
    </div>
    <div class="tools">
      <action-link
        v-if="!editMode"
        @click="$emit('show-hide')"
        icon="🧭"
        value="Show/hide vars"
      />
      <action-link
        v-if="!editMode"
        @click="editMode = true"
        icon="📈"
        value="Edit dimensions"
      />
      <action-link
        v-if="editMode"
        @click="saveChanges"
        icon="💾"
        value="Save Changes"
      />
      <action-link
        v-if="editMode"
        @click="editMode = false"
        icon="🗑️"
        value="Discard Changes"
      />
    </div>
    <div class="dimensions" :class="{ edit: editMode }">
      <dimension-editor
        class="dimension"
        v-for="dimension in value"
        v-model="filterKey[dimension.name]"
        :key="dimension.name"
        :dimension="dimension"
        :edit-mode="editMode"
        @change="updateSelection"
      />
      <action-link v-if="editMode" icon="➕" value="Create New" />
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
    &.edit {
      flex-direction: row;

      .dimension {
        border: solid thin #aaa;
        box-shadow: 1px 1px 0 0 #ddd;
        border-radius: 2px;
        overflow: hidden;
      }

      textarea {
        flex: 1;
        line-height: 1.5em;
        padding: 4px 8px;
        resize: none;
        border: none;
      }
      input {
        border: none;
        border-bottom: solid thin #eee;
        line-height: 2em;
        text-indent: 0.5em;
        width: 100%;
        text-transform: uppercase;
      }
    }
  }
}
</style>

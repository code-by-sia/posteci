<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VariableSet from "@/model/variableSet";
import ActionLink from "@/components/ActionLink.vue";

interface Variable {
  name: string;
  value: string;
}

@Component({
  name: "VariableSetEditor",
  components: {
    ActionLink,
  },
})
export default class VariableSetEditor extends Vue {
  @Prop()
  private value!: VariableSet;

  get variables() {
    let variables: Variable[] = [];
    for (let variable in this.value.variables) {
      variables.push({
        name: variable,
        value: this.value.variables[variable],
      });
    }
    return variables;
  }

  newVarName(obj: any, index = 0): string {
    let name = index === 0 ? "variable" : `variable_${index}`;
    if (obj[name]) {
      return this.newVarName(obj, index + 1);
    }
    return name;
  }

  onVariableChange({ addNew = false }) {
    let newValues: VariableSet = {
      key: this.value.key,
      variables: {},
    };
    for (let variable of this.variables) {
      newValues.variables[variable.name] = variable.value;
    }
    if (addNew) {
      const name: string = this.newVarName(newValues.variables);
      newValues.variables[name] = '"string"';
    }
    this.$emit("input", newValues);
    this.$emit("change");
  }

  addNewRow() {
    this.onVariableChange({ addNew: true });
  }

  shouldBlur(v: Variable) {
    return ["secret", "token", "password", "auth", "bearer", "basic"].find(
      (sensitive) =>
        v.name.indexOf(sensitive) > -1 || v.value.trim().startsWith(sensitive)
    );
  }
}
</script>

<template>
  <div class="variable-set-editor">
    <div class="variables">
      <div class="variable">
        <span>Variable name</span>
        <span>Value Script</span>
      </div>
      <div
        v-for="(variable, index) in variables"
        v-bind:key="index"
        class="variable"
      >
        <input type="text" v-model="variable.name" @change="onVariableChange" />
        <input
          type="text"
          v-model="variable.value"
          @change="onVariableChange"
          :class="{ blur: shouldBlur(variable) }"
        />
      </div>
      <div>
        <action-link icon="➕" value="Add New" @click="addNewRow" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.variable-set-editor {
  display: flex;
  flex-direction: column;

  .variables {
    flex: 1;
    display: flex;
    flex-direction: column;

    .variable {
      border-bottom: dotted thin rebeccapurple;
      display: flex;
      background: white;

      input,
      span {
        border: none;
        font-size: 1.3em;
        padding: 5px;
        margin: 2px;
        font-family: monospace;

        &:first-child {
          flex: 1;
        }

        &:last-child {
          flex: 2;
        }

        &.blur:not(:focus) {
          filter: blur(5px);
        }
      }

      span {
        text-align: left;
        background: #f3f3f3;
      }
    }
  }
}
</style>

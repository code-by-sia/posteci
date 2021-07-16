<script lang="ts">
import DialogBase from "@/components/Dialog.vue";
import { Component, Vue } from "vue-property-decorator";
import PosteciFile from "@/model/posteci/file";
import { clipboard } from "electron";

@Component({
  name: "save-data-dialog",
  components: { DialogBase },
})
export default class SaveDataDialog extends Vue {
  saveToLocalStorage() {
    this.$emit("save-data", {
      commit: (data: PosteciFile) =>
        localStorage.setItem("posteci-data", JSON.stringify(data)),
    });
    this.$emit("close");
  }

  copyToClipboard() {
    this.$emit("save-data", {
      commit: (data: PosteciFile) => clipboard.writeText(JSON.stringify(data)),
    });
    this.$emit("close");
  }
}
</script>
<template>
  <dialog-base
    icon="💾"
    title="Save data"
    class="save-data"
    @close="$emit('close')"
  >
    <section class="section">
      <button @click="saveToLocalStorage">
        Save to Local Storage
        <i>🔬</i>
      </button>
      <button @click="copyToClipboard">
        Copy to Clipboard
        <i>🧬</i>
      </button>
    </section>
  </dialog-base>
</template>
<style scopped lang="scss">
.save-data {
  .section {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-shadow: 1px 1px #ffffff;
    color: #9e9e9e;
    align-items: center;
    justify-content: center;
  }

  button {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: linear-gradient(170deg, #fdfbfb 0%, #ebedee 100%);
    padding: 16px;
    margin: 8px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 28px;
    border: solid 1px #dddddd;
    letter-spacing: 2px;
    font-weight: bold;
    color: #444;
    text-shadow: 1px 1px #fff;
    box-shadow: 0 0 5px #dedede, 0 1px 0px #d0d0d0, 0 2px 0px #eee,
      0 -1px 0px #fff inset, 0 -2px 1px #f5f5f5 inset;
    border-radius: 5px;

    transition: 0.5s;

    &:hover {
      box-shadow: 0 0 5px #fff, 0 1px 0px #d0d0d0, 0 2px 0px #eee,
        0 -1px 0px #f6f6f6 inset, 0 -2px 1px #f5f5f5 inset;
    }

    &:active {
      color: #040467;
      box-shadow: 0 0 5px #fff, 0 2px 5px #999, 0 2px 0px #eee,
        0 -1px 0px #f6f6f6 inset, 0 -2px 1px #f5f5f5 inset;
    }

    i {
      font-style: normal;
      font-size: 32px;
      margin-left: 24px;
    }
  }
}
</style>


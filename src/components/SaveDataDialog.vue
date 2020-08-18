<script lang="ts">
import DialogBase from '@/components/Dialog.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'save-data-dialog',
  components: {DialogBase}
})
export default class SaveDataDialog extends Vue {

}
</script>
<template>
  <dialog-base icon="📮" title="Save data" class="save-data" @close="$emit('close')">
    <section class="section">
      TODO: NOT IMPLEMENTED YET!
    </section>
  </dialog-base>

</template>
<style scopped lang="scss">
.save-data {
  .section {
    display: flex;
    flex: 1;
    text-shadow: 1px 1px #ffffff;
    color: #9e9e9e;
    align-items: center;
    justify-content: center;
  }
}
</style>


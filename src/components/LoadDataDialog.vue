<script lang="ts">
import DialogBase from '@/components/Dialog.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'load-data-dialog',
  components: {DialogBase}
})
export default class LoadDataDialog extends Vue {

}
</script>
<template>
  <dialog-base icon="📬️" title="Load data" class="load-data" @close="$emit('close')">
    <section class="section">
      TODO: NOT IMPLEMENTED YET!
    </section>
  </dialog-base>

</template>
<style scopped lang="scss">
.load-data {
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


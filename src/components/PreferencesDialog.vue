<script lang="ts">
import DialogBase from '@/components/Dialog.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'preferences-dialog',
  components: {DialogBase}
})
export default class PreferencesDialog extends Vue {

}
</script>
<template>
  <dialog-base icon="🛠️" title="Preferences" class="preferences" @close="$emit('close')">
    <div class="panels">
      <ul class="side">
        <li class="selected">
          <i>📐</i>
          <span>Appearance</span>
        </li>
        <li>
          <i>🏗️</i>
          <span>Request Generation</span>
        </li>
        <li>
          <i>🦺</i>
          <span>Security</span>
        </li>
        <li>
          <i>🔩</i>
          <span>Plugins</span>
        </li>
      </ul>
      <section class="section">
        TODO: NOT IMPLEMENTED YET!
      </section>
    </div>
  </dialog-base>

</template>
<style scopped lang="scss">
.preferences {
  .panels {
    flex: 1;
    display: flex;
    align-items: center;

    .side {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 10px;

        &.selected {
          background: white;
        }

        i {
          font-style: normal;
          font-size: 36px;
          width: 64px;
          line-height: 64px;
        }

        span {
          flex: 1;
          font-weight: bold;
          font-size: 14px;
        }

        border-bottom: solid thin #ddd;
        border-top: solid thin #fff;

        &:first-child {
          border-top: none
        }

        &:last-child {
          border-bottom: none
        }
      }
    }

    .section {
      flex: 1;
      color: #9e9e9e;
    }

    text-shadow: 1px 1px #ffffff;
  }
}
</style>


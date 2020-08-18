<script lang="ts">
import DialogBase from '@/components/Dialog.vue';
import {Component, Vue} from 'vue-property-decorator';
import PosteciFile from '@/model/posteci/file'
import testDimensions from '@/data/dimensions';
import testVariables from '@/data/variables';
import testDomains from '@/data/domains';

@Component({
  name: 'load-data-dialog',
  components: {DialogBase}
})
export default class LoadDataDialog extends Vue {
  get testData(): PosteciFile {
    return {
      metadata: {
        version: 1,
        ui: {}
      },
      data: {
        domains: testDomains,
        dimensions: testDimensions,
        variableSets: testVariables
      }
    }
  }

  private readonly EMPTY = {
    metadata: {
      version: 1,
      ui: {}
    },
    data: {
      domains: [],
      dimensions: [],
      variableSets: []
    }
  };

  get localStorageData(): PosteciFile {
    const local = localStorage.getItem('posteci-data')
    if (!local) {
      return this.EMPTY
    }

    return <PosteciFile>(JSON.parse(local!!))
  }

  load(data: PosteciFile) {
    this.$emit('load-data', data)
    this.$emit('close')
  }
}
</script>
<template>
  <dialog-base icon="📬️" title="Load data" class="load-data" @close="$emit('close')">
    <section class="section">
      <h4>🚢 What kind of data do you want to be loaded?</h4>
      <div class="selections">
        <button @click="load(testData)">
          Test Data
          <i>👩‍🔬</i>
        </button>
        <button @click="load(localStorageData)">
          localStorage
          <i>🥼</i>
        </button>
        <button @click="console.error('not implemented yet!')">
          Raw JSON
          <i>🧬</i>
        </button>
      </div>
    </section>
  </dialog-base>

</template>
<style scopped lang="scss">
.load-data {
  .section {
    display: flex;
    flex-direction: column;
    flex: 4;
    text-shadow: 1px 1px #ffffff;
    color: #9e9e9e;
    align-items: center;
    justify-content: center;

    h4 {
      text-align: left;
      font-size: 18px;
      color: #446;
      min-width: 640px;
    }

    .selections {
      display: flex;
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
      box-shadow: 0 0 5px #dedede, 0 1px 0px #d0d0d0, 0 2px 0px #eee, 0 -1px 0px #fff inset, 0 -2px 1px #f5f5f5 inset;
      border-radius: 5px;

      transition: 0.5s;

      &:hover {
        box-shadow: 0 0 5px #fff, 0 1px 0px #d0d0d0, 0 2px 0px #eee, 0 -1px 0px #f6f6f6 inset, 0 -2px 1px #f5f5f5 inset;
      }

      &:active {
        color: #040467;
        box-shadow: 0 0 5px #fff, 0 2px 5px #999, 0 2px 0px #eee, 0 -1px 0px #f6f6f6 inset, 0 -2px 1px #f5f5f5 inset;
      }

      i {
        font-style: normal;
        font-size: 32px;
        margin-left: 24px;
      }
    }
  }
}
</style>


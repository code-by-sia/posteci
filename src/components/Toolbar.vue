<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ActionLink from '@/components/ActionLink.vue';

@Component({
  name: 'Toolbar',
  components: {
    ActionLink
  }
})
export default class Toolbar extends Vue {
}
</script>
<template>
  <div class="toolbar">
    <action-link icon="🗄" value="Load" @click="$emit('load-data')"/>
    <action-link icon="🗃️" value="Save" @click="$emit('save-data')"/>
    <action-link icon="🧰" value="Setting" @click="$emit('show-preferences')"/>
  </div>
</template>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  border-bottom: dotted thin #ccc;

  .link {
    color: #333;
    font-weight: bolder;
    padding: 0 15px 0 0;
  }
}
</style>


<script lang="ts">
import ActionLink from '@/components/ActionLink.vue';
import {Component, Prop, Vue} from 'vue-property-decorator';
import Toolbar from '@/components/Toolbar.vue';
import HttpRequest from '@/model/httpRequest';
import DomainEditor from '@/components/DomainEditor.vue';
import Domain from '@/model/domain';

@Component({
  name: 'Domains',
  components: {DomainEditor, Toolbar, ActionLink}
})
export default class App extends Vue {

  ui: any = {selected: null}

  @Prop()
  private value!: any[];

  clearSelect() {
    this.selectRequest(null)
  }

  deleteDomain(domain: Domain) {
    this.$delete(this.value, this.value.indexOf(domain))
  }

  selectRequest(request: null | HttpRequest) {
    this.$emit('onRequestSelect', request)
    this.ui.selected = request
  }

  toggleDomainUI(name: any) {
    const current = this.ui.domains[name] || {}
    current.open = !current.open
    this.$set(this.ui.domains, name, current)
  }
}
</script>
<template>
  <div class="domains">
    <h4 @click="clearSelect">Domains</h4>
    <Toolbar/>
    <div class="list">
      <DomainEditor
          v-for="(domain, index) in value"
          :key="index"
          :value="domain"
          :selected="ui.selected"
          @select="selectRequest"
          @delete="deleteDomain"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.domains {
  display: flex;
  flex-direction: column;
  min-width: 200px;

  h4 {
    cursor: pointer;
  }

  .list {
    flex: 1;
    background: #fefefe;
  }
}
</style>

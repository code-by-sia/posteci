<script lang="ts">
import ActionLink from '@/components/ActionLink.vue';
import {Component, Prop, Vue} from 'vue-property-decorator';
import HttpRequest from '@/model/httpRequest';
import DomainEditor from '@/components/DomainEditor.vue';
import Domain from '@/model/domain';

@Component({
  name: 'Domains',
  components: {DomainEditor, ActionLink}
})
export default class DomainsEditor extends Vue {

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
    <slot></slot>
    <div class="list">
      <DomainEditor
          v-for="(domain, index) in value"
          :key="index"
          :value="domain"
          :selected="ui.selected"
          @select="selectRequest"
          @delete="deleteDomain"
      />
      <div @click="$emit('onRequestNew')" style="cursor:pointer;">
        <strong>Add new domain</strong>
        <span> ➕ </span>
      </div>
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

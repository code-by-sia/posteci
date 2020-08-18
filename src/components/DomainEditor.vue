<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Domain from '@/model/domain';
import ActionLink from '@/components/ActionLink.vue';
import Method from '@/components/Method.vue';
import HttpRequest from '@/model/httpRequest';

@Component({
  name: 'domain-editor',
  components: {
    Method,
    ActionLink
  }
})
export default class DomainEditor extends Vue {
  @Prop()
  private value!: Domain;

  @Prop()
  private selected: HttpRequest | null = null;

  private open: boolean = false;
  private editMode: boolean = false;

  createRequest() {
    const newRequest: HttpRequest = {
      name: 'New Request',
      method: 'GET',
      protocol: 'HTTP',
      headers: [],
      body: null,
      path: 'foo.bar'
    }
    this.value.requests = [...(this.value.requests), newRequest]
  }

  onToggle() {
    this.open = !this.open
  }

}
</script>
<template>
  <section class="domain">
    <header>
      <i @click="onToggle">🗂</i>
      <input v-if="editMode" type="text" v-model="value.name" @keypress.enter="editMode=false"/>
      <span @click="onToggle" @dblclick="editMode = true" v-else>{{ value.name }}</span>
      <action-link class="action new" icon="📄" @click="createRequest"/>
      <action-link class="action  delete" icon="🗑️" @click="$emit('delete', value)"/>
    </header>
    <div class="requests" v-if="open">
      <action-link
          v-for="(request, index) in value.requests"
          :value="request.name"
          :key="`request_${index}`"
          :class="{ 'selected': selected===request }"
          @click="$emit('select', request)"
      >
        <method :value="request.method"/>
      </action-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.domain {
  border-bottom: dotted thin #efefef;

  header {
    line-height: 2em;
    cursor: pointer;
    height: 32px;
    margin: 0;
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;

    i {
      font-style: normal;
      width: 24px;
      margin-left: 12px;
      margin-right: 4px;
    }

    input, span {
      flex: 1;
      font-size: 14px;

      &:not(focus) {
        background: none;
      }
    }

    input {
      padding: 5px;
      border-radius: 4px;
      border: solid 2px #1f5ecc;
    }

    .action {
      visibility: hidden;
    }

    &:hover {
      .action {
        visibility: visible;
      }
    }
  }

  .requests {
    padding-left: 25px;
  }
}

.selected {
  background: #000000;
  color: #ffffff;
}

</style>

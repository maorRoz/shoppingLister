<template>
  <div>
    <InputBar :addItem="addItem" />
    <ShopList :items="items" :removeItem="removeItem" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputBar from '@/components/InputBar.vue';
import ShopList from '@/components/ShopList.vue';

@Component({ components: { InputBar, ShopList } })
export default class ShopListForm extends Vue {
  get items(): { message: string }[] {
    return this.$store.state.items;
  }

  addItem(value: string) {
    this.$store.dispatch('addItem', value);
  }
  removeItem(index: number) {
    this.$store.dispatch('removeItem', index);
  }
}
</script>

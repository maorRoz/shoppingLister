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
  private items: { message: string }[] = [];

  addItem(value: string) {
    this.items.push({ message: value });
  }
  removeItem(value: string) {
    this.items = this.items.filter((item) => item.message !== value);
  }
}
</script>

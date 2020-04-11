<template>
  <div class="shop-list__layout">
    <div
      class="shop-list__body"
      v-for="(item, index) in items"
      :key="index"
      :class="`shop-list__item`"
    >
      <div v-on:click="() => removeItem(index)">
        {{ item.message }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShopList extends Vue {
  @Prop() private items!: { message: string };
  @Prop() private removeItem!: (index: number) => void;
}
</script>

<style scoped>
.shop-list__layout {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-top: 50px;
}

.shop-list__item {
  cursor: pointer;
  border-bottom: 1px solid rgb(211, 202, 202);
}

.shop-list__item:hover {
  color: blue;
}

.shop-list__body:last-child {
  border-bottom: none;
}
</style>

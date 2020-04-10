<template>
  <div class="input-bar">
    <input
      placeholder="write your todo task here..."
      v-model="value"
      v-on:keyup.enter="submit"
    />
    <Moshe />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Moshe from '@/components/Moshe.vue';

@Component({ components: { Moshe } })
export default class InputBar extends Vue {
  @Prop() private addItem!: (value: string) => void;

  private value = '';

  submit() {
    this.addItem(this.value);
    this.value = '';
  }
}
</script>

<style scoped>
.input-bar {
  width: 40%;
  overflow: hidden;
  margin: 20px auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.input-bar input {
  width: 100%;
  font-size: 25px;
  outline: none;
}
</style>

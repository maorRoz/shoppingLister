<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ShopListForm />
  </div>
</template>

<script>
import ShopListForm from '@/components/ShopListForm';

export default {
  name: 'Home',
  components: {
    ShopListForm
  }
};
</script>

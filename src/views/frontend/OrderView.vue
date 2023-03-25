<template>
  <div class="container content-height">
    <nav aria-label="breadcrumb " style="margin-top: 100px">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/products" class="green">線上訂餐</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">訂單細節</li>
      </ol>
    </nav>
    <div class="my-8 my-md-15">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router';
  import { mapState } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  export default {
    compontents: {
      RouterView,
    },
    computed: {
      ...mapState(loadingStore, ['isLoading']),
    },
  };
</script>

<style lang="scss" scoped>
  .content-height {
    @include mobile() {
      min-height: calc(100vh - 309px);
    }
  }
</style>

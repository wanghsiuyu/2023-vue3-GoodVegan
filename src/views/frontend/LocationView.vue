<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- banner start-->
  <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">門市資訊</h1>
        </div>
      </div>
    </div>
  </section>
  <!-- banner end-->
  <div class="container">
    <!-- breadcrumb start-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">門市資訊</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <section class="row justify-content-center flex-column flex-lg-row mb-20 mb-lg-8">
      <div class="col-lg-4 fs-6 fs-lg-5 text-center text-lg-start">
        <img src="@/assets/image/logo1.png" alt="logo" width="100" height="100" class="mb-4" />
        <p>台南市東區樂活路 59 號</p>
        <p>訂位 / 06-2345678</p>
        <p>週二 - 週日 / 10:30 am - 20:30 pm</p>
        <p>餐點供應至 20:00 pm</p>
        <p>週一公休</p>
        <p>店內禁帶外食，感謝配合</p>
      </div>
      <div class="col-lg-4">
        <div class="store mb-4"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1736935595773!2d120.17949669414736!3d23.01739387434223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77637a953ce7%3A0x5932de1ec2587f13!2z5qiC5rS76Lev!5e0!3m2!1szh-TW!2stw!4v1678418669447!5m2!1szh-TW!2stw"
          width="100%"
          height="175"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  .banner {
    @include banner('https://images.unsplash.com/photo-1478860002487-680cc42afbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', center, cover);
  }
  .banner-plan {
    @include banner-plan();
  }
  .store {
    background-image: url(@/assets/image/store.png);
    height: 175px;
    width: 100%;
    background-size: cover;
    background-position: center 0px;
  }
</style>
<script>
  import { mapState, mapActions } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  export default {
    methods: {
      ...mapActions(loadingStore, ['loading']),
    },
    computed: {
      ...mapState(loadingStore, ['isLoading']),
    },
    mounted() {
      this.loading();
    },
  };
</script>

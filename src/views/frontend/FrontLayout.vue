<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-primary-light py-2 py-lg-3">
    <div class="container">
      <RouterLink to="/">
        <img src="@/assets/image/logo2.png" width="113" height="32" alt="logo" class="d-inline-block navbar-logo" />
      </RouterLink>
      <div class="d-flex align-items-center">
        <!--手機版 cart & login icon-->
        <div class="d-lg-none">
          <a role="button" class="navbar-brand position-relative" @click.prevent="toggleOffcanvas()" aria-controls="offcanvasRight">
            <img src="@/assets/image/cart.svg" alt="cart" width="40" height="40" />
            <span v-if="cartsTotalNum" class="position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white" style="top: 6px">{{ cartsTotalNum }} </span>
          </a>
          <RouterLink to="/login" class="navbar-brand">
            <img src="@/assets/image/member.svg" alt="member" width="40" height="40" />
          </RouterLink>
        </div>
        <!--漢堡按鈕-->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <img src="@/assets/image/menu.svg" alt="menu" width="40" height="40" />
        </button>
      </div>
      <!-- navbar 摺疊內容 -->
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-center" id="navbarText">
        <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item mb-4 mb-lg-0">
            <RouterLink to="/about" class="nav-link pt-3 mx-5 fs-lg-5 d-inline-block">關於我們</RouterLink>
          </li>
          <li class="nav-item mb-4 mb-lg-0">
            <RouterLink to="/products" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">線上訂餐</RouterLink>
          </li>
          <li class="nav-item mb-4 mb-lg-0">
            <a href="#/#qa" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">常見問題</a>
          </li>
          <li class="nav-item mb-4 mb-lg-0">
            <RouterLink to="/location" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">門市資訊</RouterLink>
          </li>
        </ul>
      </div>
      <!--桌機版 cart & login icon-->
      <div class="d-none d-lg-block">
        <a role="button" class="navbar-brand position-relative" @click.prevent="toggleOffcanvas()" aria-controls="offcanvasRight">
          <img src="@/assets/image/cart.svg" alt="cart" width="40" height="40" />
          <span v-if="cartsTotalNum" class="position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white" style="top: 6px">{{ cartsTotalNum }} </span>
        </a>
        <RouterLink to="/login" class="navbar-brand">
          <img src="@/assets/image/member.svg" alt="member" width="40" height="40" />
        </RouterLink>
      </div>
    </div>
  </nav>
  <CartOffcanvas ref="offcanvas"></CartOffcanvas>
  <main>
    <RouterView></RouterView>
  </main>
  <footer class="bg-white">
    <div class="container py-8">
      <div class="d-lg-flex justify-content-between align-items-center pb-6 pb-lg-4 border-bottom">
        <div class="d-flex flex-lg-column justify-content-between align-items-center align-items-lg-start mb-8 mb-lg-0">
          <a href="#"><img src="@/assets/image/logo2.png" width="183" height="52" alt="logo" class="mb-lg-6" /></a>
          <ul class="nav">
            <li class="nav-item">
              <a href="#" class="me-4">
                <img src="@/assets/image/instagram.svg" alt="instagram" width="32" class="text-dark" />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="me-4">
                <img src="@/assets/image/FB.svg" alt="FB" width="32" />
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <img src="@/assets/image/youtube.svg" alt="youtube" width="32" />
              </a>
            </li>
          </ul>
        </div>
        <ul class="nav mb-2">
          <li class="nav-item mb-6 mb-lg-0">
            <RouterLink to="/" class="me-21 mx-lg-5 fs-lg-5 text-gray-dark" exact-active-class="exact-active">首頁</RouterLink>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <RouterLink to="/about" class="me-13 mx-lg-5 fs-lg-5 text-gray-dark" exact-active-class="exact-active">關於我們</RouterLink>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <RouterLink to="/products" class="fs-lg-5 text-gray-dark me-13 mx-lg-5" exact-active-class="exact-active">線上訂餐</RouterLink>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <RouterLink to="/#qa" class="fs-lg-5 text-gray-dark me-13 mx-lg-5" exact-active-class="exact-active">常見問題</RouterLink>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <RouterLink to="/location" class="fs-lg-5 text-gray-dark me-13 mx-lg-5" exact-active-class="exact-active">門市資訊</RouterLink>
          </li>
        </ul>
        <ul class="nav flex-column gap-3 gap-lg-4">
          <li class="nav-item">
            <a href="tel:+88662345678"> <img src="@/assets/image/phone.svg" alt="phone" width="24" class="me-3" />06-2345678 </a>
          </li>
          <li class="nav-item">
            <a href="mailto:goodvegan@email.com"> <img src="@/assets/image/mail.svg" alt="mail" width="24" class="me-3" />goodvegan@email.com </a>
          </li>
          <li class="nav-item">
            <a href="#"> <img src="@/assets/image/address.svg" alt="address" width="24" class="me-3" />台南市東區樂活路 59 號 </a>
          </li>
        </ul>
      </div>
      <div class="d-lg-flex justify-content-between pt-6 pt-lg-4 text-gray">
        <p class="mb-2 mb-lg-0">Copyright © 2023 goodvegan.com | All Rights Reserved.</p>
        <p class="mb-0">本網站僅作為個人練習作品，無任何商業用途</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router';
  import { mapState, mapActions } from 'pinia';
  import cartsStore from '@/store/cartsStore.js';
  import CartOffcanvas from '@/components/frontend/CartOffcanvas.vue';
  export default {
    components: {
      RouterLink,
      RouterView,
      CartOffcanvas,
    },
    methods: {
      ...mapActions(cartsStore, ['getCart']),
      toggleOffcanvas() {
        this.$refs.offcanvas.bsOffcanvas.toggle();
      },
    },
    computed: {
      ...mapState(cartsStore, ['cartsTotalNum']),
    },
    mounted() {
      this.getCart();
    },
  };
</script>

<style lang="scss" scoped>
  .navbar-logo {
    @include mobile() {
      width: 198px;
      height: 56px;
    }
  }
  .nav-item .nav-link {
    border-bottom: 4px solid transparent;
  }
  .nav-item .nav-link:focus {
    color: black;
    border-bottom: 4px solid #a8cf45;
  }
  .nav-item .router-link-exact-active {
    border-bottom: 4px solid #a8cf45;
  }
</style>

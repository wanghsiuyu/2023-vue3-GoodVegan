<script>
  import { RouterLink, RouterView } from 'vue-router';
  export default {
    components: {
      RouterLink,
      RouterView,
    },
  };
</script>
<template>
  <!-- navbar start-->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-primary-light py-2 py-lg-3">
    <div class="container">
      <RouterLink to="/">
        <img src="@/assets/image/logo2.png" width="113" height="32" alt="logo" class="d-inline-block navbar-logo" />
      </RouterLink>

      <div class="d-flex align-items-center">
        <!--手機版 cart & login icon-->
        <div class="d-lg-none">
          <RouterLink to="/order" class="navbar-brand">
            <img src="../../assets/image/cart.svg" alt="cart" width="40" height="40" />
          </RouterLink>
          <RouterLink to="/login" class="navbar-brand">
            <img src="../../assets/image/member.svg" alt="member" width="40" height="40" />
          </RouterLink>
        </div>
        <!--漢堡按鈕-->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <!-- <span class="navbar-toggler-icon"></span> -->
          <img src="../../assets/image/menu.svg" alt="menu" width="40" height="40" />
        </button>
      </div>
      <!-- navbar 摺疊內容 -->
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-center" id="navbarText">
        <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item mb-4 mb-lg-0">
            <a href="#" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">關於我們</a>
          </li>
          <li class="nav-item mb-4 mb-lg-0">
            <a href="#" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">線上訂餐</a>
          </li>
          <li class="nav-item mb-4 mb-lg-0">
            <a href="#" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">常見問題</a>
          </li>
          <li class="nav-item mb-4 mb-lg-0">
            <a href="#" class="nav-link fs-lg-5 pt-3 mx-5 d-inline-block">門市資訊</a>
          </li>
        </ul>
      </div>
      <!--桌機版 cart & login icon-->
      <div class="d-none d-lg-block">
        <a href="#" class="navbar-brand">
          <img src="@/assets/image/cart.svg" alt="cart" width="40" height="40" />
        </a>
        <a href="#" class="navbar-brand">
          <img src="@/assets/image/member.svg" alt="member" width="40" height="40" />
        </a>
      </div>
    </div>
  </nav>
  <!-- navbar end-->
  <main>
    <RouterView></RouterView>
  </main>
  <!-- footer start -->
  <footer class="bg-white">
    <div class="container py-8">
      <div class="d-lg-flex justify-content-between align-items-center pb-6 pb-lg-4 border-bottom">
        <div class="d-flex flex-lg-column justify-content-between mb-8 mb-lg-0">
          <!-- logo -->
          <a href="#"><img src="@/assets/image/logo2.png" width="183" height="52" alt="logo" class="mb-lg-6" /></a>

          <!-- fb,IG,youtube -->
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
        <!-- 導航選單 -->
        <ul class="nav mb-2">
          <li class="nav-item mb-6 mb-lg-0">
            <a href="#" class="me-21 mx-lg-5 fs-lg-5 text-gray-dark d-inline-block">首頁</a>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <a href="#" class="me-13 mx-lg-5 fs-lg-5 text-gray-dark d-inline-block">關於我們</a>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <a href="#" class="fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block">線上訂餐</a>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <a class="fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block" href="#">門市資訊</a>
          </li>
          <li class="nav-item mb-6 mb-lg-0">
            <a class="fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block" href="#">常見問題</a>
          </li>
        </ul>
        <!-- 連絡資訊 -->
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
      <!-- copyright -->
      <div class="d-lg-flex justify-content-between pt-6 pt-lg-4 text-gray">
        <p class="mb-2 mb-lg-0">Copyright © 2023 goodvegan.com | All Rights Reserved.</p>
        <p class="mb-0">本網站僅作為個人練習作品，無任何商業用途</p>
      </div>
    </div>
  </footer>
  <!-- footer end -->
</template>

<style lang="scss">
  .navbar-logo {
    @include mobile() {
      width: 198px;
      height: 56px;
    }
  }

  .nav-link {
    border-bottom: 4px solid transparent;
  }
  .nav-link.active {
    border-bottom: 4px solid #a8cf45;
  }

  // .border-green {
  //   border-color: #a8cf45 !important;
  // }
  // .green {
  //   color: #4f8147;
  // }
  // .bg-light-green {
  //   background-color: #f0f8ec;
  // }

  // .mask {
  //   width: 193px;
  //   height: 200px;
  //   overflow: hidden;
  // }
  // .mask img {
  //   transition: all 0.8s ease;
  // }
  // .mask img:hover {
  //   transform: scale(1.2, 1.2);
  // }
  // .img-cover {
  //   object-fit: cover;
  // }
  // .line-clamp {
  //   display: -webkit-box;
  //   -webkit-box-orient: vertical;
  //   -webkit-line-clamp: 2;
  //   overflow: hidden;
  // }
  // .nav-tabs {
  //   --bs-nav-tabs-border-width: 0px;
  // }
  // .nav-tabs .nav-link:focus {
  //   border-color: transparent;
  // }
  // .nav-tabs .nav-link {
  //   border-bottom: 3px solid transparent;
  // }
  // .nav-tabs .nav-link:hover {
  //   border-color: #a8cf45;
  //   transition: all 0.5s ease;
  //   opacity: 0.8;
  // }
  // .nav-tabs .nav-link.active {
  //   border-bottom: 3px solid #a8cf45;
  // }
  // .offcanvas.offcanvas-start {
  //   width: 450px;
  // }
  // .table {
  //   --bs-table-border-color: transparent;
  // }
  // .form-check-input:checked {
  //   background-color: #4f8147;
  //   border-color: #4f8147;
  // }
</style>

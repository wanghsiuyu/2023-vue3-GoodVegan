<template>
  <section class="mt-14 mt-lg-20">
    <div class="home-banner bg-position-center bg-size-cover bg-no-repeat d-flex flex-column justify-content-center align-items-center px-6 px-lg-0">
      <div class="d-flex flex-column justify-content-center align-items-center px-6 py-10 px-lg-10" style="background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(8px); border-radius: 24px">
        <img src="@/assets/image/logo1.png" alt="logo" width="160" height="160" class="img-fluid home-banner-logo mb-6" data-aos="fade-up" data-aos-delay="50" />
        <h3 class="fs-3 fs-lg-1 fw-lg-bold text-center mb-4" data-aos="fade-up" data-aos-delay="100">A Plant-based Cuisine</h3>
        <h1 class="fs-5 fs-lg-3 text-center text-gray-dark mb-8" data-aos="fade-up" data-aos-delay="200">以全植物飲食為理念的餐廳， 為您呈現最健康的蔬食饗宴。</h1>
        <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6" data-aos="fade-up" data-aos-delay="300">立即訂餐</a>
      </div>
    </div>
  </section>
  <section class="feature-bg bg-no-repeat py-8 py-lg-20">
    <div class="container">
      <div class="text-center">
        <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-4 mb-lg-6">七大堅持</h2>
        <h3 class="fs-4 fs-lg-3 text-gray-dark mb-4 mb-lg-10">我們想改變您的飲食方式，提供您健康優質的膳食，這是我們對食物的七大堅持</h3>
        <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6 mb-5 mb-lg-10">立即訂餐</a>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col" data-aos="fade-up">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">1</p>
                <img src="@/assets/image/feature01.svg" class="feature-icon me-4 me-lg-6" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">植物性飲食</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">
                  藉由「全植物飲食」，不只能讓身體機能恢復「平衡」、「乾淨」與「營養」，還能夠預防心血管疾病、降低三高、遠離癌症，幫助減重，好處多多喔！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-down">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">2</p>
                <img src="@/assets/image/feature02.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">天然新鮮食材</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">
                  在設計菜單時，我們將您的健康放在首位。通過與全台灣在地小農合作，我們為您挑選出當季盛產的新鮮有機食材，創造出您會喜歡的美味、均衡的膳食。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-up">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">3</p>
                <img src="@/assets/image/feature03.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">無食品添加物</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">除了使用新鮮、天然的食材，我們堅持不添加任何人工防腐劑或香料。我們的料理不僅美味，還能夠幫助您保持健康。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-down">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">4</p>
                <img src="@/assets/image/feature04.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">全食物飲食</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">攝取當季在地天然、完整（連皮帶籽）、多樣化，不使用任何精製糖、精製鹽等食材。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-up">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">5</p>
                <img src="@/assets/image/feature05.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">無麩質飲食</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">
                  我們嚴選不含麩質的新鮮食材，讓您除了享用美味的食物之外，還能減少對腸胃的負擔。如何不用麵粉、無蛋、無奶做出美味可口的無麩質甜點？您一定要親自來品嘗看看！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-down">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">6</p>
                <img src="@/assets/image/feature06.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">裸食料理</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">所有食物加熱超過 40.6°C 以上，就會失去了 70％ 的營養和酵素。而裸食不破壞食物的營養與原始酵素，成為許多蔬食者喜愛的飲食方式。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-up">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">7</p>
                <img src="@/assets/image/feature07.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">永續餐桌哲學</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">我們落實永續餐桌理念，這意味著我們堅持使用可持續的食材和環保的做法來經營餐廳、提供可回收的餐具和餐盒，以減少資源耗損與浪費。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hot-food-bg bg-size-contain bg-no-repeat py-8 py-lg-20">
    <div class="text-center">
      <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-5 mb-lg-10">暢銷餐點</h2>
    </div>
    <div class="container mb-5 mb-lg-10" data-aos="fade-down">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-xxl-12">
          <SwiperHotFood></SwiperHotFood>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6">更多餐點</a>
    </div>
  </section>
  <section class="bg-primary-light py-8 py-lg-20">
    <div class="text-center">
      <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-5 mb-lg-10" style="z-index: 0">好評推薦</h2>
    </div>
    <div class="container" data-aos="fade-down" data-aos-delay="400">
      <SwiperComment></SwiperComment>
    </div>
    <div id="qa"></div>
  </section>
  <section class="py-8 py-lg-20">
    <div class="text-center">
      <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-5 mb-lg-10" style="z-index: 0">常見問題</h2>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="100">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <div class="d-flex flex-column align-items-start">
                    <h4 class="text-dark fs-6 fs-lg-4 mb-0">餐廳是否有提供訂位服務？</h4>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                        <h6 class="text-gray-dark lh-base">目前僅提供一個禮拜前訂位，訂位專線：06-2345678</h6>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="200">
              <h2 class="accordion-header" id="heading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  <div class="d-flex flex-column align-items-start">
                    <h4 class="text-dark fs-6 fs-lg-4 mb-0">請問消費有提供刷卡服務嗎？</h4>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                        <h6 class="text-gray-dark lh-base">在店內用餐僅能以現金付費，線上訂購有提供刷卡服務。</h6>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="300">
              <h2 class="accordion-header" id="heading3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  <div class="d-flex flex-column align-items-start">
                    <h4 class="text-dark fs-6 fs-lg-4 mb-0">請問餐廳可以攜帶寵物嗎？</h4>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                        <h6 class="text-gray-dark lh-base">我們是寵物友善餐廳，歡迎攜帶寵物入內用餐。</h6>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="400">
              <h2 class="accordion-header" id="heading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse">
                  <div class="d-flex flex-column align-items-start">
                    <h4 class="text-dark fs-6 fs-lg-4 mb-0">餐廳附近是否有停車格或停車場？</h4>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                        <h6 class="text-gray-dark lh-base">餐廳正後方有附設停車場，在店內用餐即可免費停車。</h6>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="500">
              <h2 class="accordion-header" id="heading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse2">
                  <div class="d-flex flex-column align-items-start">
                    <h4 class="text-dark fs-6 fs-lg-4 mb-0">線上訂購的運費如何計算？</h4>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                        <h6 class="text-gray-dark lh-base">我們提供外送的地區是台南市東區、中西區、永康區、安平區、南區、北區、仁德區、安南區，運費是 100 元，消費滿 500 元免運費。</h6>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="550">
              <h2 class="accordion-header" id="heading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse2">
                  <div class="d-flex flex-column align-items-start">
                    <h4 class="text-dark fs-6 fs-lg-4 mb-0">可以到店取餐嗎？</h4>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                        <h6 class="text-gray-dark lh-base">可以，我們的地址是：台南市東區樂活路 59 號，餐點都是現點現做，建議提前 60~90 分鐘預訂餐點，以免久候。</h6>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a href="#"><img src="@/assets/image/top.svg" alt="top" class="img-fluid position-fixed topBtn" /></a>
</template>

<script>
  import SwiperComment from '@/components/frontend/SwiperComment.vue';
  import SwiperHotFood from '@/components/frontend/SwiperHotFood.vue';
  export default {
    components: {
      SwiperComment,
      SwiperHotFood,
    },
  };
</script>

<style lang="scss">
  .home-banner {
    height: 598px;
    background-image: url(@/assets/image/banner-home-sm.png);
    @include mobile() {
      height: 642px;
      background-image: url(@/assets/image/banner-home-lg.png);
    }
  }
  .home-banner-logo {
    @include mobile() {
      width: 200px;
      height: 200px;
    }
  }
  .block-title {
    @include block-title();
  }
  .feature-bg {
    @include mobile() {
      background-position: -50px -50px, 102% 109%;
      background-size: 691px 451px, 617px 520px;
      background-image: url(@/assets/image/feature-bg01.svg), url(@/assets/image/feature-bg02.svg);
    }
  }
  .feature-icon {
    width: 48px;
    height: 48px;
    @include mobile() {
      width: 64px;
      height: 64px;
    }
  }
  .feature-number {
    font-size: 155px;
    z-index: -10;
    top: -12px;
    left: 0px;
    @include mobile() {
      top: -5px;
      left: -20px;
    }
  }
  .hot-food-bg {
    background-image: url(@/assets/image/hot-food-bg-sm.svg);
    background-position: bottom right;
    @include mobile() {
      background-image: url(@/assets/image/hot-food-bg.svg);
    }
  }
  .accordion-button {
    padding: 16px;
    &:hover {
      background-color: #f0f8ec;
    }
    @include mobile() {
      padding: 20px 24px;
      border: 2px solid transparent;
    }
  }
  .accordion-button:not(.collapsed) {
    background-color: #fafafa;
    box-shadow: none;
    border: 2px solid #dfebe3;
  }
  .accordion-flush .accordion-item .accordion-button,
  .accordion-flush .accordion-item .accordion-button.collapsed {
    border-radius: 8px;
  }
  .accordion-button::after,
  .accordion-button:not(.collapsed)::after {
    width: 24px;
    height: 24px;
    background-size: contain;
    @include mobile() {
      width: 32px;
      height: 32px;
    }
  }
  .accordion-item {
    border: 0px solid transparent;
  }
  .topBtn {
    width: 56px;
    height: 56px;
    bottom: 80px;
    right: 10px;
    z-index: 100;
    @include mobile() {
      width: 100px;
      height: 100px;
    }
  }
</style>

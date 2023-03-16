<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- banner start-->
  <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">關於我們</h1>
        </div>
      </div>
    </div>
  </section>
  <!-- banner end-->
  <div class="container">
    <!-- breadcrumb start-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-8 mb-lg-20">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">關於我們</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <section>
      <div class="text-center">
        <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-8 mb-lg-15">我們的理念</h2>
      </div>
      <div class="row justify-content-between mb-4 mb-lg-17">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="vegan food"
            class="img-fluid object-fit-cover"
            data-aos="fade-down"
            width="600"
            height="400"
          />
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <p class="fs-6 fs-lg-5 text-justify" data-aos="fade-up">
              好蔬房創立於 2016 年，從創立至今始終堅持有好的品質，才能擁有顧客對好蔬房長期的信任。根據研究指出，為了獲得最佳的營養健康，至少 80%
              的飲食應由植物組成，這就是為什麼我們只選擇最好的成分，所有這些成分都是 100% 植物性的。
            </p>
          </div>
        </div>
      </div>
      <div class="row flex-lg-row-reverse justify-content-between mb-4 mb-lg-17">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="text-end">
            <img
              src="https://images.unsplash.com/photo-1569420077790-afb136b3bb8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
              alt="vegan food"
              class="img-fluid object-fit-cover"
              width="600"
              height="400"
              data-aos="fade-down"
              data-aos-delay="800"
            />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <div class="fs-6 fs-lg-5 text-justify">
              <p data-aos="fade-up" data-aos-delay="50">
                我們不使用高溫烹煮食物，而是採用裸食的方式料理食物，讓食物保有原有的必需營養素、高蛋白質、和高膳食纖維，使您一整天都精力充沛，而且不會讓您感到沉重有負擔。
              </p>
              <p data-aos="fade-up" data-aos-delay="100">我們的食物不添加任何香料、增味劑、色素或防腐劑。您在我們的菜單上不會找到任何您不了解的成分，只會看到完整、乾淨、單純的成分。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between mb-8 mb-lg-20">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/uploads/1412443967017d95e2723/2919e13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="eco"
            class="img-fluid object-fit-cover"
            width="600"
            height="400"
            data-aos="fade-down"
          />
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <p class="fs-6 fs-lg-5 text-justify" data-aos="fade-up">
              我們只從對環境和社會負責的供應商採購材料。可持續發展是我們堅守的核心精神，這意味著我們會持續不斷的推動永續餐桌的理念，並且會不斷探索我們可以改進的地方和實踐對環境友善的作法，讓我們在品嚐美味、健康食物的同時，也能為我們的地球盡一份環保的心力。
            </p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-8 mb-lg-15">我們是誰</h2>
      </div>
      <div class="row flex-lg-row-reverse justify-content-between mb-8 mb-lg-20">
        <div class="col-lg-6">
          <figure class="figure" data-aos="fade-down" data-aos-delay="800">
            <img src="@/assets/image/founders.png" class="figure-img img-fluid" alt="founders" />
            <figcaption class="figure-caption text-center">我們的創辦人 Lisa、Gordon 和 Brian</figcaption>
          </figure>
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <div class="fs-6 fs-lg-5 text-justify">
              <p data-aos="fade-up" data-aos-delay="50">
                我們是好蔬房的三位創辦人 Lisa、Gordon 和 Brian，
                本身都是純素愛好者，過去身為上班族的我們因為找不到滿意的純素外食，通常都是自己準備便當居多，我們深知要準備純素料理對一般忙碌的上班族而言相當不易，許多人因此放棄了純素飲食，這是相當可惜的。
              </p>
              <p data-aos="fade-up" data-aos-delay="100">
                我們是在一次的純素社群聚會中認識後，三人一拍即合，因此萌生了一起創業的念頭，希望能為忙碌的現代人提供純素、美味又快速的料理，這就是好蔬房創立的開始。我們對於全植物飲食和環保議題充滿熱情，致力於將食物最根本的養分和美味呈現給大家，期待能在好蔬房與大家見面喔！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  .banner {
    @include banner('https://images.unsplash.com/photo-1586718520679-67716c8f1b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', bottom, cover);
  }
  .banner-plan {
    @include banner-plan();
  }
  // title 偽元素
  .block-title {
    @include block-title();
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

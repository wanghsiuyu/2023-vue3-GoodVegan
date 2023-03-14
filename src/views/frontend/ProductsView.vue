<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- banner start-->
  <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">線上訂餐</h1>
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
        <li class="breadcrumb-item active" aria-current="page">線上訂餐</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <!-- 產品列表 start-->
    <section class="row justify-content-center mb-5">
      <div class="col-12">
        <!-- 產品 nav-tabs start-->
        <ul class="nav sticky-top bg-light mb-6 nav-tab-top" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active fs-6 fs-lg-5 text-dark px-1 mx-2" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" href="#" role="tab" aria-controls="all" aria-selected="true">
              全部商品
            </a>
          </li>
          <li v-for="tab in categoriesTabs" class="nav-item" role="presentation" :key="tab">
            <a
              class="nav-link fs-6 fs-lg-5 text-dark px-1 mx-2"
              :id="`${tab[1]}-tab`"
              data-bs-toggle="tab"
              :data-bs-target="`#${tab[1]}`"
              href="#"
              role="tab"
              aria-controls="`${tab[1]}`"
              aria-selected="false"
            >
              {{ tab[0] }}
            </a>
          </li>
        </ul>
        <!-- 產品 nav-tabs end-->
        <!-- 產品 nav-tabs-content start-->
        <div class="tab-content" id="myTabContent">
          <!-- 全部商品 -->
          <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5">
              <template v-for="product in products" :key="product.id">
                <div v-if="products" class="col">
                  <div class="position-relative hover-show-btn">
                    <div class="hover-img-mask">
                      <img :src="product.imageUrl" :alt="product.title" class="w-100 d-block rounded-3 object-fit-cover mb-3" height="240" />
                      <button
                        type="button"
                        class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                        :disabled="loadingStatus === product.id"
                        @click="addToCart(product.id)"
                      >
                        <i class="fas fa-spinner fa-pulse me-2" v-if="loadingStatus === product.id"></i>
                        <span>加入購物車</span>
                      </button>
                    </div>
                  </div>
                  <RouterLink :to="`/product/${product.id}`">
                    <h5 class="mb-2 mb-lg-3">
                      <span v-for="feature in product.checkboxFeatures" :key="feature">
                        <span v-if="feature === '純素'" class="badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2">{{ feature }}</span>
                        <span v-if="feature === '有機'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #2d9449; background-color: #ecf8f4">{{ feature }}</span>
                        <span v-if="feature === '無麩質'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #817447; background-color: #f8efec">{{ feature }}</span>
                        <span v-if="feature === '辣'" class="badge fs-6 px-2 py-1" style="color: #814747; background-color: #f8ecec">{{ feature }}</span>
                      </span>
                    </h5>
                    <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                    <h5 class="text-primary mb-3 mb-lg-4 d-flex align-items-center">
                      NT${{ product.price }}
                      <span class="fs-6 text-gray-dark ms-2"
                        ><del>NT${{ product.origin_price }}</del></span
                      >
                    </h5>
                  </RouterLink>
                </div>
              </template>
            </div>
          </div>
          <!-- 超飽足果昔盆、輕食冷盤、湯品、裸食甜點、果昔飲品 -->
          <div v-for="tab in categoriesTabs" :key="tab" class="tab-pane fade" :id="tab[1]" role="tabpanel" :aria-labelledby="`${tab[1]}-tab`">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5">
              <template v-for="product in products" :key="product.id">
                <div v-if="product.selectCategories === tab[0]" class="col">
                  <div class="position-relative hover-show-btn">
                    <div class="hover-img-mask">
                      <img :src="product.imageUrl" :alt="product.title" class="w-100 d-block rounded-3 object-fit-cover mb-3" height="240" />
                      <button
                        type="button"
                        class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                        :disabled="loadingStatus === product.id"
                        @click="addToCart(product.id)"
                      >
                        <i class="fas fa-spinner fa-pulse me-2" v-if="loadingStatus === product.id"></i>
                        <span>加入購物車</span>
                      </button>
                    </div>
                  </div>
                  <RouterLink :to="`/product/${product.id}`">
                    <h5 class="mb-2 mb-lg-3">
                      <span v-for="feature in product.checkboxFeatures" :key="feature">
                        <span v-if="feature === '純素'" class="badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2">{{ feature }}</span>
                        <span v-if="feature === '有機'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #2d9449; background-color: #ecf8f4">{{ feature }}</span>
                        <span v-if="feature === '無麩質'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #817447; background-color: #f8efec">{{ feature }}</span>
                        <span v-if="feature === '辣'" class="badge fs-6 px-2 py-1" style="color: #814747; background-color: #f8ecec">{{ feature }}</span>
                      </span>
                    </h5>
                    <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                    <h5 class="text-primary mb-3 mb-lg-4 d-flex align-items-center">
                      NT${{ product.price }}
                      <span class="fs-6 text-gray-dark ms-2"
                        ><del>NT${{ product.origin_price }}</del></span
                      >
                    </h5>
                  </RouterLink>
                </div>
              </template>
            </div>
          </div>
        </div>
        <!-- 產品 nav-tabs-content end-->
      </div>
    </section>
    <!-- 產品列表 end-->
  </div>
</template>
<script>
  import { RouterLink } from 'vue-router';
  import { mapState, mapActions } from 'pinia';
  import productsStore from '@/store/productsStore.js';
  import loadingStore from '@/store/loadingStore.js';
  import cartsStore from '@/store/cartsStore.js';
  export default {
    data() {
      return {
        categoriesTabs: [
          ['超飽足果昔盆', 'bowl'],
          ['輕食冷盤', 'salad'],
          ['湯品', 'soup'],
          ['裸食甜點', 'dessert'],
          ['果昔飲品', 'juice'],
        ],
      };
    },
    components: {
      RouterLink,
    },
    methods: {
      ...mapActions(productsStore, ['getProducts']),
      ...mapActions(loadingStore, ['loading']),
      ...mapActions(cartsStore, ['addToCart']),
    },
    computed: {
      ...mapState(productsStore, ['products']),
      ...mapState(loadingStore, ['isLoading', 'loadingStatus']),
    },
    mounted() {
      this.getProducts();
      this.loading();
    },
  };
</script>
<style lang="scss" scoped>
  .banner {
    @include banner('@/assets/image/productBanner.png', center 1200px, auto);
  }
  .banner-plan {
    @include banner-plan();
  }
  .nav-tab-top {
    top: 57px;
    @include mobile() {
      top: 80px;
    }
  }
  .nav-link:focus {
    border-color: transparent;
  }
  .nav-link {
    border-bottom: 4px solid transparent;
    &:hover {
      border-color: transparent;
    }
  }
  .nav-link.active {
    border-bottom: 4px solid #a8cf45;
  }
  .add-to-cart-btn {
    display: none;
  }
  .hover-show-btn:hover {
    .add-to-cart-btn {
      display: block;
      width: 90%;
    }
  }
  .hover-img-mask:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s ease;
    border-radius: 8px;
  }
  .hover-img-mask:hover:before {
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>

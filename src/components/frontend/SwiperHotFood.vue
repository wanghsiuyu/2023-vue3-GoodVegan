<template>
  <swiper :modules="modules" :navigation="navigation" :loop="true" :speed="800" :breakpoints="swiperOptions.breakpoints" :autoplay="{ delay: 2500, disableOnInteraction: false }">
    <template v-for="product in products" :key="product.id">
      <template v-if="product.selectCategories === '超飽足果昔盆' || product.selectCategories === '輕食冷盤' || product.selectCategories === '湯品'">
        <swiper-slide>
          <div class="position-relative hover-show-btn">
            <div class="hover-img-mask">
              <RouterLink :to="`/product/${product.id}`" class="hover-img-mask">
                <img :src="product.imageUrl" :alt="product.title" class="w-100 d-block rounded-3 object-fit-cover" />
              </RouterLink>
              <button
                type="button"
                class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                :disabled="loadingStatus === product.id"
                @click="addToCart(product.id)"
              >
                <i class="fas fa-spinner fa-pulse" v-if="loadingStatus === product.id"></i>
                <span v-else>加入購物車</span>
              </button>
            </div>
          </div>
          <RouterLink :to="`/product/${product.id}`">
            <div class="py-3 py-lg-4">
              <h5 class="mb-2 mb-lg-3">
                <span v-for="feature in product.checkboxFeatures" :key="feature">
                  <span v-if="feature === '純素'" class="badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2">{{ feature }}</span>
                  <span v-if="feature === '有機'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #2d9449; background-color: #ecf8f4">{{ feature }}</span>
                  <span v-if="feature === '無麩質'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #817447; background-color: #f8efec">{{ feature }}</span>
                  <span v-if="feature === '辣'" class="badge fs-6 px-2 py-1" style="color: #814747; background-color: #f8ecec">{{ feature }}</span>
                </span>
              </h5>
              <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
              <h5 class="text-primary d-flex align-items-center">
                NT${{ $filters.toThousands(product.price) }}
                <span class="fs-6 text-gray-dark ms-2"
                  ><del>NT${{ $filters.toThousands(product.origin_price) }}</del></span
                >
              </h5>
            </div>
          </RouterLink>
        </swiper-slide>
      </template>
    </template>
  </swiper>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Navigation } from 'swiper';
  import { mapState, mapActions } from 'pinia';
  import productsStore from '@/store/productsStore.js';
  import cartsStore from '@/store/cartsStore.js';
  import loadingStore from '@/store/loadingStore.js';

  import 'swiper/css';
  import 'swiper/css/navigation';

  export default {
    data() {
      return {
        modules: [Navigation, Autoplay],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        swiperOptions: {
          breakpoints: {
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            375: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          },
        },
      };
    },
    components: {
      Swiper,
      SwiperSlide,
      RouterLink,
    },
    methods: {
      ...mapActions(productsStore, ['getProducts']),
      ...mapActions(cartsStore, ['addToCart']),
    },
    computed: {
      ...mapState(productsStore, ['products']),
      ...mapState(loadingStore, ['loadingStatus']),
    },
    mounted() {
      this.getProducts();
    },
  };
</script>

<style lang="scss" scoped>
  .swiper-slide img {
    height: 145px;
    @include mobile() {
      height: 200px;
    }
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
    @include sm() {
      content: '';
      display: block;
      position: absolute;
      width: 48px;
      height: 48px;
      background-size: contain;
      top: 0px;
    }
  }
  .swiper-button-next:after {
    background-image: url(@/assets/image/arrow-next.svg);
    right: 0px;
    @include xxl() {
      right: -80px;
    }
  }
  .swiper-button-prev:after {
    background-image: url(@/assets/image/arrow-prev.svg);
    left: 0px;
    @include xxl() {
      left: -80px;
    }
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
  }
  .hover-img-mask:hover:before {
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>

<template>
  <swiper :modules="modules" :navigation="navigation" :loop="true" :speed="800" :breakpoints="swiperOptions.breakpoints" :autoplay="{ delay: 2500, disableOnInteraction: false }">
    <swiper-slide v-for="product in products" :key="product.id">
      <RouterLink :to="`/product/${product.id}`" class="position-relative product-link">
        <img :src="product.imageUrl" :alt="product.title" class="w-100 d-block rounded-3 object-fit-cover mb-3 mb-lg-4" />
        <div class="hover-img-mask">
          <button type="button" class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5">加入購物車</button>
        </div>
      </RouterLink>
      <RouterLink :to="`/product/${product.id}`" class="product-link">
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
    </swiper-slide>
  </swiper>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</template>
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
    @include xxl() {
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
    right: -80px;
  }
  .swiper-button-prev:after {
    background-image: url(@/assets/image/arrow-prev.svg);
    left: -80px;
  }
  .add-to-cart-btn {
    display: none;
  }
  .product-link:hover {
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
<script>
  import { RouterLink } from 'vue-router';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Navigation } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  const { VITE_URL, VITE_PATH } = import.meta.env;

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
        products: [],
        tempProduct: {},
      };
    },
    components: {
      Swiper,
      SwiperSlide,
      RouterLink,
    },
    methods: {
      getProducts() {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
          .then((res) => {
            this.products = res.data.products;
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      getProduct(id) {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
          .then((res) => {
            this.tempProduct = res.data.product;
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
    },
    mounted() {
      this.getProducts();
    },
  };
</script>

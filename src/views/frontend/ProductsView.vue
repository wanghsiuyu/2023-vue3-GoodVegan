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
    <div class="row row-cols-1 row-cols-md-2 gy-2 mb-20 mb-lg-8">
      <template v-for="product in products" :key="product.id">
        <div v-if="products" class="col">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body d-flex align-items-start flex-column h-100">
                  <RouterLink :to="`/product/${product.id}`">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <div class="d-flex mb-2">
                      <span v-for="feature in product.checkboxFeatures" :key="feature" class="badge me-1 green bg-light-green">{{ `${feature} ` }} </span>
                    </div>
                    <small class="card-text line-clamp">{{ product.description }}</small>
                  </RouterLink>
                  <div class="d-flex align-items-center mt-auto">
                    <a href="#" class="link-secondary me-2" title="加入購物車" @click.prevent="addToCart(product.id)">
                      <i class="fas fa-spinner fa-pulse" v-if="loadingStatus === product.id"></i>
                      <span v-else class="material-icons fs-2 green"> add_box </span>
                    </a>
                    <small class="me-2 text-secondary"
                      ><del>NT${{ product.origin_price }}</del></small
                    >
                    <p class="fs-5 text-bold mb-0 green">NT${{ product.price }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mask rounded-end">
                  <RouterLink :to="`/product/${product.id}`">
                    <img :src="product.imageUrl" width="200" height="200" class="rounded-end img-cover" :alt="product.title" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <!-- 產品列表 end-->
  </div>
</template>
<script>
  import { RouterLink } from 'vue-router';
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        isLoading: false,
        loadingStatus: '',
        products: [],
      };
    },
    components: {
      RouterLink,
    },
    methods: {
      loading() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      },
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
      addToCart(product_id, qty = 1) {
        const data = {
          product_id,
          qty,
        };
        this.loadingStatus = product_id;
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
          .then((res) => {
            this.loadingStatus = '';
            alert(res.data.message);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
    },
    mounted() {
      this.getProducts();
      this.loading();
    },
  };
</script>
<style lang="scss">
  .banner {
    @include banner('@/assets/image/good-vegan-s.png', center 1200px, auto);
  }
  .banner-plan {
    @include banner-plan();
  }
  .green {
    color: #4f8147;
  }
  .bg-light-green {
    background-color: #f0f8ec;
  }
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
  }
</style>

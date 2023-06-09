<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container mt-20">
    <div class="row justify-content-center py-4 py-lg-8">
      <section class="col-lg-5">
        <div class="d-lg-none">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-5">
              <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
              <li class="breadcrumb-item"><RouterLink to="/products">線上訂餐</RouterLink></li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.selectCategories }}</li>
            </ol>
          </nav>
        </div>
        <div class="mb-5">
          <img v-if="!selectImg" :src="product.imageUrl" :alt="product.title" class="object-fit-cover w-100 mb-2 h-lg-img" height="250" />
          <img v-else :src="selectImg" :alt="product.title" class="object-fit-cover w-100 mb-2 h-lg-img" height="250" />
          <img v-for="img in product.imagesUrl" :key="img" :src="img" :alt="product.title" width="80" height="80" class="object-fit-cover me-2" @click="selectImg = img" style="cursor: pointer" />
        </div>
      </section>
      <section class="col-lg-5">
        <div class="d-none d-lg-block">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-5">
              <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
              <li class="breadcrumb-item"><RouterLink to="/products">線上訂餐</RouterLink></li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.selectCategories }}</li>
            </ol>
          </nav>
        </div>
        <h1 class="h2 mb-2">{{ product.title }}</h1>
        <h5 class="mb-2 mb-lg-3">
          <span v-for="feature in product.checkboxFeatures" :key="feature">
            <span v-if="feature === '純素'" class="badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2">{{ feature }}</span>
            <span v-if="feature === '有機'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #2d9449; background-color: #ecf8f4">{{ feature }}</span>
            <span v-if="feature === '無麩質'" class="badge fs-6 px-2 py-1 me-1 me-lg-2" style="color: #817447; background-color: #f8efec">{{ feature }}</span>
            <span v-if="feature === '辣'" class="badge fs-6 px-2 py-1" style="color: #814747; background-color: #f8ecec">{{ feature }}</span>
          </span>
        </h5>
        <p class="h2 text-bold green mb-1">NT${{ $filters.toThousands(product.price) }}</p>
        <p class="h3 mb-4">
          <small class="text-gray-dark"
            ><del>NT${{ $filters.toThousands(product.origin_price) }}</del></small
          >
        </p>
        <p class="d-flex mb-4"><span class="material-icons me-1"> discount </span>單筆訂單滿 NT$500 免運</p>
        <select class="form-select w-lg-50 mb-4" v-model="productQty" :disabled="loadingStatus === product.id">
          <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
        </select>
        <button type="button" class="btn btn-primary w-100 mb-10" :disabled="loadingStatus === product.id" @click="addToCart(product.id, productQty)">加入購物車</button>
        <div class="mb-5 mb-lg-6">
          <p class="fs-6 mb-2 fw-bold text-primary">商品介紹</p>
          <p>
            {{ product.description }}
          </p>
        </div>
        <div class="mb-5 mb-lg-6">
          <p class="fs-6 mb-2 fw-bold text-primary">內容物</p>
          <p>
            {{ product.content }}
          </p>
        </div>
        <div class="mb-5 mb-lg-6">
          <p class="fs-6 mb-2 fw-bold text-primary">產地</p>
          <p>
            {{ product.location }}
          </p>
        </div>
        <div class="mb-5 mb-lg-6">
          <p class="fs-6 mb-2 fw-bold text-primary">保存期限</p>
          <p>為保持食物最佳口感及鮮度，請於 2 小時內食用完畢，隔餐勿食。</p>
        </div>
        <div class="mb-5 mb-lg-6">
          <p class="fs-6 mb-2 fw-bold text-primary">注意事項</p>
          <ol class="ps-5">
            <li>本店商品皆為新鮮現作，保存期限短，如您收到商品有瑕疵，請務必立即反應讓我們為您處理！</li>
            <li>我們提供外送的地區是台南市東區、中西區、永康區、安平區、南區、北區、仁德區、安南區，運費是 100 元。</li>
          </ol>
        </div>
      </section>
      <section class="col-lg-10 py-8 pt-lg-15">
        <div class="text-center text-lg-start">
          <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-6 mb-lg-10">相關餐點</h2>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5">
          <template v-for="item in products" :key="item.id">
            <div v-if="item.selectCategories === product.selectCategories && item.title !== product.title" class="col">
              <div class="position-relative hover-show-btn">
                <div class="hover-img-mask">
                  <RouterLink :to="`/product/${item.id}`" class="hover-img-mask">
                    <img :src="item.imageUrl" :alt="item.title" class="w-100 d-block rounded-3 object-fit-cover" height="240" />
                  </RouterLink>
                  <button
                    type="button"
                    class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                    :disabled="loadingStatus === item.id"
                    @click="addToCart(item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse me-2" v-if="loadingStatus === item.id"></i>
                    <span>加入購物車</span>
                  </button>
                </div>
              </div>
              <RouterLink :to="`/product/${item.id}`">
                <div class="py-3 py-lg-4">
                  <h4 class="fs-5 text-center text-dark mb-2 mb-lg-3">{{ item.title }}</h4>
                  <h5 class="text-primary d-flex align-items-center justify-content-center">
                    NT${{ $filters.toThousands(item.price) }}
                    <span class="fs-6 text-gray-dark ms-2"
                      ><del>NT${{ $filters.toThousands(item.origin_price) }}</del></span
                    >
                  </h5>
                </div>
              </RouterLink>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import { mapState, mapActions } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  import cartsStore from '@/store/cartsStore.js';
  import productsStore from '@/store/productsStore.js';
  import Toast from '@/mixins/toast.js';

  const { VITE_URL, VITE_PATH } = import.meta.env;

  export default {
    data() {
      return {
        product: {},
        productQty: 1,
        selectImg: '',
        isLoading: false,
      };
    },
    components: {
      RouterLink,
    },
    methods: {
      ...mapActions(cartsStore, ['addToCart']),
      ...mapActions(productsStore, ['getProducts']),
      getProduct() {
        this.isLoading = true;
        const { id } = this.$route.params;
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
          .then((res) => {
            this.isLoading = false;
            this.selectImg = '';
            this.product = res.data.product;
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
    },
    computed: {
      ...mapState(loadingStore, ['loadingStatus']),
      ...mapState(productsStore, ['products']),
    },
    watch: {
      '$route.params': {
        immediate: true,
        handler() {
          if (this.$route.params.id) {
            this.getProduct();
          }
        },
      },
    },
    mounted() {
      this.getProduct();
      this.productQty = 1;
      this.getProducts();
    },
  };
</script>

<style lang="scss">
  .h-lg-img {
    @include mobile {
      height: 526px;
    }
  }
  .block-title {
    @include block-title();
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

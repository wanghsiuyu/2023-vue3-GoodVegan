<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container" style="margin-top: 126px">
    <!-- breadcrumb start-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/products" class="green">線上訂餐</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <!--商品細節 start-->
    <div class="row justify-content-center my-4">
      <div class="col-5">
        <div class="mb-5">
          <img v-if="!selectImg" :src="product.imageUrl" :alt="product.title" class="img-cover w-100 mb-2" height="400" />
          <img v-else :src="selectImg" :alt="product.title" class="img-cover w-100 mb-2" height="400" />
          <img v-for="img in product.imagesUrl" :key="img" :src="img" :alt="product.title" width="70" height="70" class="img-cover me-2" @click="selectImg = img" style="cursor: pointer" />
        </div>
      </div>
      <div class="col-4">
        <h2 class="fs-3 mt-3">{{ product.title }}</h2>
        <div class="d-flex mb-4">
          <span v-for="feature in product.checkboxFeatures" :key="feature" class="badge me-1 green bg-light-green">{{ feature }}</span>
        </div>
        <p class="fs-4 text-bold green mb-1">NT${{ product.price }}</p>
        <p class="mb-4">
          <small class="text-secondary"
            ><del>NT${{ product.origin_price }}</del></small
          >
        </p>
        <p class="d-flex mb-4"><span class="material-icons me-1"> discount </span>單筆訂單滿 NT$500 免運</p>
        <select class="form-select w-50 mb-4" v-model="productQty" :disabled="loadingStatus === product.id">
          <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
        </select>
        <button type="button" class="btn btn-secondary w-100" :disabled="loadingStatus === product.id" @click="addToCart(product.id, productQty)">加入購物車</button>
      </div>
      <div class="col-9">
        <p class="fs-6 mb-0 green">商品介紹</p>
        <p>
          <small>{{ product.description }}</small>
        </p>
        <p class="fs-6 mb-0 green">內容物</p>
        <p>
          <small>{{ product.content }}</small>
        </p>
        <p class="fs-6 mb-0 green">產地</p>
        <p>
          <small>{{ product.location }}</small>
        </p>
        <p class="fs-6 mb-0 green">保存期限</p>
        <p><small>為保持食物最佳口感及鮮度，請於 2 小時內食用完畢，隔餐勿食。</small></p>
        <p class="fs-6 mb-0 green">注意事項</p>
        <ol>
          <li><small>本店商品皆為新鮮現作，保存期限短，如您收到商品有瑕疵，請務必立即反應讓我們為您處理！</small></li>
          <li><small>我們提供外送的地區是台南市東區、中西區、永康區、安平區、南區、北區、仁德區、安南區，運費是 100 元。</small></li>
        </ol>
      </div>
    </div>
    <!--商品細節 end-->
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
        product: {},
        productQty: 1,
        selectImg: '',
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
      getProduct() {
        this.loading();
        const { id } = this.$route.params;
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
          .then((res) => {
            this.product = res.data.product;
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
            this.getCart();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      getCart() {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
          .then((res) => {
            this.cartsTotal = res.data.data;
            this.shipping = parseInt(this.cartsTotal.total >= 500 ? 0 : 100);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
    },
    mounted() {
      this.getProduct();
      this.productQty = 1;
      this.selectImg = '';
    },
  };
</script>
<style lang="scss">
  .green {
    color: #4f8147;
  }
  .bg-light-green {
    background-color: #f0f8ec;
  }
</style>

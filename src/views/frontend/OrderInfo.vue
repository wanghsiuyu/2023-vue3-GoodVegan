<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- 購物車有商品時 -->
  <div v-if="cartsTotal.carts?.length">
    <!-- 訂單確認進度條 start -->
    <div class="row justify-content-center mb-10">
      <div class="col-3 border-bottom border-5 border-primary">
        <div class="d-flex flex-column align-items-center">
          <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">1</div>
          <p class="text-primary mb-2 fw-bold">填寫資料</p>
        </div>
      </div>
      <div class="col-3 border-bottom border-5 border-gray">
        <div class="d-flex flex-column align-items-center">
          <div class="rounded-circle bg-gray text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">2</div>
          <p class="text-gray mb-2 fw-bold">確認付款</p>
        </div>
      </div>
      <div class="col-3 border-bottom border-5 border-gray">
        <div class="d-flex flex-column align-items-center">
          <div class="rounded-circle bg-gray text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">3</div>
          <p class="text-gray mb-2 fw-bold">付款成功</p>
        </div>
      </div>
    </div>
    <!-- 訂單確認進度條 end -->
    <div class="row justify-content-center">
      <!-- 購物車 start -->
      <section class="col-lg-5 mb-5 mb-lg-0">
        <a href="#/products">
          <p class="d-flex align-items-center text-dark mb-6"><span class="material-icons fs-6 me-2"> arrow_back_ios_new </span>繼續購物</p>
        </a>
        <!-- 購物車表格 -->
        <table class="table align-middle">
          <tbody>
            <tr class="border-bottom"></tr>
            <tr v-for="cart in cartsTotal.carts" :key="cart.id">
              <td class="d-flex align-items-center justify-content-between gap-5 py-4 px-0">
                <div class="d-flex align-items-center">
                  <a role="button" class="btn p-0 me-3" :class="{ disabled: loadingStatus === cart.id }" @click.prevent="removeCart(cart.id)" style="border-color: transparent">
                    <img src="@/assets/image/delete.svg" alt="delete" />
                  </a>
                  <img :src="cart.product.imageUrl" class="object-fit-cover flex-shrink-0" width="80" height="80" alt="cart.product.title" />
                </div>
                <div class="d-flex align-items-center justify-content-between w-75">
                  <div class="d-flex flex-column">
                    <p class="mb-1">{{ cart.product.title }}</p>
                    <p class="mb-1">NT${{ cart.product.price }} / {{ cart.product.unit }}</p>
                    <div class="mb-0 w-75">
                      <select v-model="cart.qty" class="form-select form-select-sm" @change="setCartQty(cart)" :disabled="loadingStatus === cart.id">
                        <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
                      </select>
                    </div>
                  </div>
                  <p class="mb-0 text-end">NT${{ cart.total }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 購物車合計 -->
        <button type="button" class="btn btn-sm btn-outline-primary mb-3" @click="removeCartsAll">清空購物車</button>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">小計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ cartsTotal.total }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">
            運費
            <small v-if="cartsTotal.total < 500" class="text-danger">(消費滿 $500 可享免運優惠)</small>
            <small v-else class="text-danger">(恭禧您已達免運門檻！)</small>
          </p>
          <p class="fs-6 mb-2 fw-bold">NT${{ shipping }}</p>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p class="fs-6 mb-2">總計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ cartsTotal.final_total + shipping }}</p>
        </div>
      </section>
      <!-- 購物車 end -->
      <!-- 表單 start -->
      <section class="col-lg-6">
        <div class="card border-0 bg-primary-light py-4 p-lg-5">
          <div class="card-body">
            <v-form v-slot="{ errors }" @submit="onSubmit" ref="form">
              <h2 class="h5 text-center mb-6">訂單連絡資訊</h2>
              <div class="mb-4">
                <label for="name" class="form-label">姓名<span class="text-danger">*</span></label>
                <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="王小明" rules="required" v-model="user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-4">
                <label for="phone" class="form-label">手機<span class="text-danger">*</span></label>
                <v-field id="phone" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="0912345678" :rules="isPhone" v-model="user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">信箱<span class="text-danger">*</span></label>
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="name@email.com"
                  rules="email|required"
                  v-model="user.email"
                ></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" value="" id="subscribe" checked />
                <label class="form-check-label" for="subscribe">願意收到好蔬房的相關訊息和優惠資訊</label>
              </div>
              <div class="mb-4">
                <label for="address" class="form-label">外送地址<span class="text-danger">*</span>（到店自取者請填寫「自取」）</label>
                <v-field
                  id="address"
                  name="外送地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['外送地址'] }"
                  placeholder="自取／○○區○街○巷○號"
                  rules="required"
                  v-model="user.address"
                ></v-field>
                <error-message name="外送地址" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-4">
                <label for="message" class="form-label">訂單備註</label>
                <v-field as="textarea" id="message" name="訂單備註" class="form-control" rows="5" v-model="message" style="resize: none"></v-field>
              </div>
              <div class="mb-4">
                <p>註：<span class="text-danger">*</span>為必填欄位</p>
              </div>
              <button type="submit" class="btn btn-primary w-100">送出訂單</button>
            </v-form>
          </div>
        </div>
      </section>
      <!-- 表單 end -->
    </div>
  </div>
  <!-- 購物車為空時 -->
  <div v-else class="text-center">
    <img src="@/assets/image/empty-cart.svg" alt="empty-cart" class="mb-6" />
    <h3 class="mb-6">您的購物車目前是空的喔</h3>
    <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6">現在就去逛逛</a>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  import cartsStore from '@/store/cartsStore.js';
  import Toast from '@/mixins/toast.js';

  const { VITE_URL, VITE_PATH } = import.meta.env;

  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
        orderId: '',
      };
    },
    methods: {
      onSubmit() {
        if (this.cartsTotal.carts.length) {
          this.loading();
          const data = {
            user: this.user,
            message: this.message,
          };
          this.$http
            .post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
            .then((res) => {
              Toast.fire({
                icon: 'success',
                title: res.data.message,
                width: 250,
              });
              this.loading();
              this.getCart();
              this.$refs.form.resetForm();
              this.orderId = res.data.orderId;
              this.$router.push(`/order/checkout/${this.orderId}`);
            })
            .catch((err) => {
              Toast.fire({
                icon: 'error',
                title: err.response.data.message,
                width: 250,
              });
            });
        } else {
          Toast.fire({
            icon: 'error',
            title: '目前購物車沒有任何品項，無法送出訂單。',
            width: 250,
          });
        }
      },
      isPhone(value) {
        const phoneNumber = /^(09)[0-9]{8}$/;
        return phoneNumber.test(value) ? true : '需為正確的手機號碼格式';
      },
      ...mapActions(loadingStore, ['loading']),
      ...mapActions(cartsStore, ['addToCart', 'getCart', 'removeCart', 'removeCartsAll', 'setCartQty']),
    },
    computed: {
      ...mapState(cartsStore, ['cartsTotal', 'cartsTotalNum', 'shipping']),
      ...mapState(loadingStore, ['isLoading', 'loadingStatus']),
    },
    mounted() {
      this.getCart();
      this.loading();
    },
  };
</script>

<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- 訂單確認進度條 start -->
  <div class="row justify-content-center mb-10">
    <div class="col-3 border-bottom border-5 border-primary">
      <div class="d-flex flex-column align-items-center">
        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">1</div>
        <p class="text-primary mb-2 fw-bold">填寫資料</p>
      </div>
    </div>
    <div class="col-3 border-bottom border-5 border-primary">
      <div class="d-flex flex-column align-items-center">
        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">2</div>
        <p class="text-primary mb-2 fw-bold">確認付款</p>
      </div>
    </div>
    <div v-if="!order.is_paid" class="col-3 border-bottom border-5 border-gray">
      <div class="d-flex flex-column align-items-center">
        <div class="rounded-circle bg-gray text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">3</div>
        <p class="text-gray mb-2 fw-bold">付款成功</p>
      </div>
    </div>
    <div v-else class="col-3 border-bottom border-5 border-primary">
      <div class="d-flex flex-column align-items-center">
        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">3</div>
        <p class="text-primary mb-2 fw-bold">付款成功</p>
      </div>
    </div>
  </div>
  <!-- 訂單確認進度條 end -->
  <div class="row">
    <!-- 訂購內容 start -->
    <section class="col-lg-6 mb-5 mb-lg-0">
      <h2 class="fs-5 fs-lg-4 mb-4">訂購內容</h2>
      <table class="table align-middle">
        <tbody>
          <tr class="border-bottom"></tr>
          <tr v-for="item in order.products" :key="item.id">
            <td class="d-flex align-items-center justify-content-between gap-5 gap-md-10 py-4">
              <img :src="item.product.imageUrl" class="object-fit-cover d-block" width="90" height="90" alt="item.product.title" />
              <div class="d-flex flex-column flex-md-row align-items-md-center w-75">
                <div class="d-flex flex-column w-md-75">
                  <p class="mb-1 mb-md-0">{{ item.product.title }}</p>
                  <p class="mb-1 mb-md-0">NT${{ item.product.price }} / {{ item.product.unit }}</p>
                  <p class="mb-1 mb-md-0">數量：{{ item.qty }}</p>
                </div>
                <p class="mb-0 fs-6 text-primary text-md-end w-md-25">NT${{ item.final_total }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- 訂購內容 end -->
    <!-- 訂單連絡資訊 start -->
    <section class="col-lg-5 offset-lg-1">
      <div class="card border-0 bg-primary-light py-3 p-lg-5">
        <div class="card-body">
          <h2 class="fs-5 fs-lg-4 mb-4">訂單連絡資訊</h2>
          <form @submit.prevent="payOrder(order.id)">
            <table class="table align-middle bg-primary-light">
              <tbody>
                <tr>
                  <th class="p-md-3 border-0">付款狀態</th>
                  <td class="p-md-3 border-0">
                    <span v-if="order.is_paid" class="text-success">已完成付款</span>
                    <span v-else class="text-danger">尚未付款</span>
                  </td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">訂單金額</th>
                  <td class="p-md-3 border-0">NT${{ order.total + shipping }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">訂單編號</th>
                  <td class="p-md-3 border-0">{{ order.id }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">訂單成立日期</th>
                  <td class="p-md-3 border-0">{{ new Date(order.create_at * 1000).toLocaleDateString() }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">信箱</th>
                  <td class="p-md-3 border-0">{{ order.user?.email }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">姓名</th>
                  <td class="p-md-3 border-0">{{ order.user?.name }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">手機</th>
                  <td class="p-md-3 border-0">{{ order.user?.tel }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">外送地址</th>
                  <td class="p-md-3 border-0">{{ order.user?.address }}</td>
                </tr>
                <tr>
                  <th class="p-md-3 border-0">訂單備註</th>
                  <td class="p-md-3 border-0">{{ order.message ? order.message : '無' }}</td>
                </tr>
              </tbody>
            </table>
            <button v-if="!order.is_paid" type="submit" class="btn btn-primary w-100">確認付款</button>
          </form>
        </div>
      </div>
    </section>
    <!-- 訂單連絡資訊 end -->
  </div>
</template>
<script>
  import { mapState, mapActions } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  import Toast from '@/mixins/toast.js';

  const { VITE_URL, VITE_PATH } = import.meta.env;

  export default {
    data() {
      return {
        order: {},
        shipping: 0,
      };
    },
    methods: {
      ...mapActions(loadingStore, ['loading']),
      getOrder() {
        const { orderId } = this.$route.params;
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/order/${orderId}`)
          .then((res) => {
            if (res.data.success) {
              this.order = res.data.order;
              this.shipping = parseInt(this.order.total >= 500 ? 0 : 100);
            }
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      payOrder(id) {
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/pay/${id}`)
          .then((res) => {
            if (res.data.success) {
              this.getOrder();
              Toast.fire({
                icon: 'success',
                title: '已完成付款。',
                width: 250,
              });
            }
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
      ...mapState(loadingStore, ['isLoading']),
    },
    mounted() {
      this.loading();
      this.getOrder();
    },
  };
</script>

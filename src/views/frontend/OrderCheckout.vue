<template>
  <VueLoading v-model:active="isLoading" />
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
        <p class="text-gray mb-2 fw-bold">完成訂購</p>
      </div>
    </div>
    <div v-else class="col-3 border-bottom border-5 border-primary">
      <div class="d-flex flex-column align-items-center">
        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">3</div>
        <p class="text-primary mb-2 fw-bold">完成訂購</p>
      </div>
    </div>
  </div>
  <div class="row justify-content-center flex-lg-row-reverse">
    <section class="col-lg-5 mb-5 mb-lg-0">
      <div class="card border-0 bg-primary-light py-3 p-lg-5">
        <div v-if="!order.is_paid" class="card-body">
          <h2 class="fs-5 fs-lg-4 mb-4">訂單連絡資訊</h2>
          <form @submit.prevent="payOrder(order.id)">
            <table class="table align-middle bg-primary-light">
              <tbody>
                <tr>
                  <td class="p-md-3 border-0">付款狀態</td>
                  <td class="p-md-3 border-0">
                    <span class="text-danger">尚未付款</span>
                  </td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">訂單金額</td>
                  <td class="p-md-3 border-0">NT${{ $filters.toThousands(order.total + shipping) }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">訂單編號</td>
                  <td class="p-md-3 border-0">{{ order.id }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">訂單成立日期</td>
                  <td class="p-md-3 border-0">{{ new Date(order.create_at * 1000).toLocaleDateString() }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">信箱</td>
                  <td class="p-md-3 border-0">{{ order.user?.email }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">姓名</td>
                  <td class="p-md-3 border-0">{{ order.user?.name }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">手機</td>
                  <td class="p-md-3 border-0">{{ order.user?.tel }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">外送地址</td>
                  <td class="p-md-3 border-0">{{ order.user?.address }}</td>
                </tr>
                <tr>
                  <td class="p-md-3 border-0">訂單備註</td>
                  <td class="p-md-3 border-0">{{ order.message ? order.message : '無' }}</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" class="btn btn-primary w-100">確認付款</button>
          </form>
        </div>
        <div v-else class="card-body">
          <div class="text-center mb-2">
            <img src="@/assets/image/check.svg" alt="check" />
          </div>
          <h2 class="fs-5 fs-lg-4 mb-4 text-center">完成訂購</h2>
          <div class="text-justify mb-4">
            <p>恭喜您已完成訂購，請留意您的手機，餐點送達您指定的地點時，將會以手機連絡您取餐。</p>
            <p>若您是自取，製作完畢將會通知您前往取餐。 取餐地址：台南市東區樂活路 59 號</p>
            <p>若有任何問題，歡迎來電詢問：06-2345678</p>
          </div>
          <div class="text-center">
            <a href="#/products" class="btn btn-primary w-100 py-2 fs-lg-5">看看其他餐點</a>
          </div>
        </div>
      </div>
    </section>
    <section class="col-lg-5">
      <h2 class="fs-5 fs-lg-4 mb-4">訂購內容</h2>
      <table class="table align-middle" style="font-size: 14px">
        <tbody>
          <tr class="border-bottom"></tr>
          <tr v-for="item in order.products" :key="item.id">
            <td class="d-flex align-items-center justify-content-between gap-5 gap-md-10 py-4">
              <img :src="item.product.imageUrl" class="object-fit-cover d-block" width="90" height="90" alt="item.product.title" />
              <div class="d-flex align-items-center justify-content-between w-75">
                <div>
                  <p class="mb-1">{{ item.product.title }}</p>
                  <p class="mb-1">NT${{ $filters.toThousands(item.product.price) }} / {{ item.product.unit }}</p>
                  <p class="mb-0">數量：{{ item.qty }}</p>
                </div>
                <p class="mb-0 text-end">NT${{ $filters.toThousands(item.final_total) }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  import Toast from '@/mixins/toast.js';
  import { toThousands } from '@/mixins/filters';

  const { VITE_URL, VITE_PATH } = import.meta.env;

  export default {
    data() {
      return {
        order: {},
        shipping: 0,
      };
    },
    methods: {
      toThousands,
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

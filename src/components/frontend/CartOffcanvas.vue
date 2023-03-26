<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">
        購物車 <span v-if="cartsTotalNum">({{ cartsTotalNum }})</span>
      </h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-0">
      <div v-if="cartsTotal.carts?.length">
        <div class="text-end">
          <button type="button" class="btn btn-sm btn-outline-gray mb-2" @click="confirmRemove" style="font-size: 12px">清空購物車</button>
        </div>
        <table class="table align-middle" style="font-size: 14px">
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
                  <div>
                    <p class="mb-1">{{ cart.product.title }}</p>
                    <p class="mb-1">NT${{ $filters.toThousands(cart.product.price) }} / {{ cart.product.unit }}</p>
                    <div style="width: 80px">
                      <select v-model="cart.qty" class="form-select form-select-sm" @change="setCartQty(cart)" :disabled="loadingStatus === cart.id">
                        <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
                      </select>
                    </div>
                  </div>
                  <p class="mb-0 text-end">NT${{ $filters.toThousands(cart.total) }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">小計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ $filters.toThousands(cartsTotal.total) }}</p>
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
          <p class="fs-6 mb-2 fw-bold">NT${{ $filters.toThousands(cartsTotal.total + shipping) }}</p>
        </div>
        <a href="#" class="btn btn-primary w-100 mb-2" @click.prevent="goOrderView()">訂單結帳</a>
      </div>
      <!-- 購物車為空時 -->
      <div v-else class="text-center">
        <img src="@/assets/image/empty-cart.svg" alt="empty-cart" class="mb-6" width="80" height="80" />
        <h3 class="fs-5 mb-6">您的購物車目前是空的喔</h3>
        <a href="#" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6" @click.prevent="goProductsView()">現在就去逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
  import cartsStore from '@/store/cartsStore.js';
  import { mapActions, mapState } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  import Offcanvas from 'bootstrap/js/dist/offcanvas';

  export default {
    data() {
      return {
        bsOffcanvas: '',
      };
    },
    methods: {
      ...mapActions(cartsStore, ['getCart', 'removeCart', 'confirmRemove', 'removeCartsAll', 'setCartQty']),

      goProductsView() {
        this.bsOffcanvas.hide();
        this.$router.push('/products');
      },
      goOrderView() {
        this.bsOffcanvas.hide();
        this.$router.push('/order/info');
      },
    },
    computed: {
      ...mapState(cartsStore, ['cartsTotal', 'shipping', 'cartsTotalNum']),
      ...mapState(loadingStore, ['loadingStatus']),
    },
    mounted() {
      this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasRight);
    },
  };
</script>

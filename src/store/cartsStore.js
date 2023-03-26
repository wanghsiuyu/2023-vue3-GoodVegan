import { defineStore } from 'pinia';
import axios from 'axios';
import loadingStore from '@/store/loadingStore.js';
import Toast from '@/mixins/toast.js';
import Swal from 'sweetalert2';

const status = loadingStore();
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartsStore', {
  state: () => ({
    cartsTotal: {},
    cartsTotalNum: 0,
    shipping: 0,
  }),
  actions: {
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      status.loadingStatus = product_id;
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          status.loadingStatus = '';
          Toast.fire({
            icon: 'success',
            title: res.data.message,
            width: 250,
          });
          this.getCart();
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.message,
            width: 250,
          });
        });
    },
    getCart() {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cartsTotal = res.data.data;
          this.cartsTotalNum = this.cartsTotal.carts.reduce((a, b) => a + b.qty, 0);
          this.shipping = parseInt(this.cartsTotal.total >= 500 ? 0 : 100);
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.message,
            width: 250,
          });
        });
    },
    removeCart(id) {
      status.loadingStatus = id;
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          status.loadingStatus = '';
          Toast.fire({
            icon: 'success',
            title: res.data.message,
            width: 250,
          });
          this.getCart();
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.message,
            width: 250,
          });
        });
    },
    confirmRemove() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-danger ms-2',
          cancelButton: 'btn btn-outline-danger',
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: '您是否要刪除購物車所有商品？',
          text: '刪除後將無法恢復',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '確認刪除',
          cancelButtonText: '取消',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.removeCartsAll();
            swalWithBootstrapButtons.fire('已刪除！', '您的購物車已清空', 'success');
          }
        });
    },
    removeCartsAll() {
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.message,
            width: 250,
          });
        });
    },
    setCartQty(cart) {
      const data = {
        product_id: cart.product_id,
        qty: cart.qty,
      };
      status.loadingStatus = cart.id;
      axios
        .put(`${VITE_URL}/api/${VITE_PATH}/cart/${cart.id}`, { data })
        .then((res) => {
          status.loadingStatus = '';
          Toast.fire({
            icon: 'success',
            title: res.data.message,
            width: 250,
          });
          this.getCart();
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
});

import { defineStore } from 'pinia';
import axios from 'axios';
import loadingStore from '@/store/loadingStore.js';
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
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
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
          alert(err.response.data.message);
        });
    },
    removeCart(id) {
      status.loadingStatus = id;
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          status.loadingStatus = '';
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeCartsAll() {
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
        .then((res) => {
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
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
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
});

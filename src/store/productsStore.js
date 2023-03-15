import axios from 'axios';
import { defineStore } from 'pinia';
import loadingStore from '@/store/loadingStore.js';
import Toast from '@/mixins/toast.js';

const status = loadingStore();
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
  }),
  getters: {},
  actions: {
    getProducts() {
      status.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          status.isLoading = false;
          this.products = res.data.products;
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

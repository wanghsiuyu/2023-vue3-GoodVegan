import axios from 'axios';
import { defineStore } from 'pinia';
import loadingStore from '@/store/loadingStore.js';
import Toast from '@/mixins/toast.js';

const status = loadingStore();
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    perPage: 8,
    currentPage: 1,
    totalPages: 1,
    displayedProducts: [],
  }),
  actions: {
    getProducts(page = 1) {
      status.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          status.isLoading = false;
          this.products = res.data.products;
          this.updatePagination(page);
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.message,
            width: 250,
          });
        });
    },
    updatePagination(page) {
      this.totalPages = Math.ceil(this.products.length / this.perPage);
      this.currentPage = page;
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.displayedProducts = this.products.slice(startIndex, endIndex);
    },
  },
});

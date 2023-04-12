import { defineStore } from 'pinia';
const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from 'axios';
import Toast from '@/mixins/toast.js';
export default defineStore('blogsStore', {
  state: () => ({
    articles: [],
    isLoading: false,
    page: {},
  }),
  actions: {
    getArticles(page = 1) {
      this.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          this.page = res.data.pagination;
          this.articles = res.data.articles;
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

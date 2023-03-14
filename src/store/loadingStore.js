import { defineStore } from 'pinia';
export default defineStore('loadingStore', {
  state: () => ({
    isLoading: false,
    loadingStatus: '',
  }),
  actions: {
    loading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 400);
    },
  },
});

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage <= 1 }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(currentPage - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in totalPages" :key="page + 'page'" class="page-item">
        <a class="page-link" href="#" @click.prevent="getProducts(page)" :class="{ active: currentPage === page }">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(currentPage + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'pinia';
  import productsStore from '@/store/productsStore.js';
  export default {
    methods: {
      ...mapActions(productsStore, ['getProducts']),
    },
    computed: {
      ...mapState(productsStore, ['totalPages', 'currentPage']),
    },
    mounted() {
      this.getProducts();
    },
  };
</script>

<style lang="scss" scoped>
  a.active {
    pointer-events: none;
  }
</style>

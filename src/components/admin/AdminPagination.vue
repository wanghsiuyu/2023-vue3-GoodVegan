<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('change-page', pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" :class="{ active: page === pages.current_page }" v-for="page in pages.total_pages" :key="page + 'page'">
        <span v-if="page === pages.current_page" class="page-link" @click="$emit('change-page', page)">{{ page }}</span>
        <a v-else class="page-link" href="#" @click.prevent="$emit('change-page', page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="$emit('change-page', pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    props: ['pages'],
  };
</script>

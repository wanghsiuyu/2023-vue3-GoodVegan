<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container mt-20">
    <div class="pt-4 pt-lg-8 pb-10 pb-lg-20">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-5 lh-lg">
          <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
          <li class="breadcrumb-item"><RouterLink to="/blogs">專欄文章</RouterLink></li>
          <li v-if="!filterBlogs.length && !filterTags.length" class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
          <li v-else-if="filterBlogs.length" class="breadcrumb-item active" aria-current="page">搜尋結果</li>
          <li v-else-if="filterTags.length" class="breadcrumb-item active d-flex align-items-center" aria-current="page"><span class="material-icons fs-5"> local_offer </span>{{ breadcrumbTag }}</li>
        </ol>
      </nav>
      <div class="row text-dark gy-8">
        <template v-if="!filterBlogs.length && !filterTags.length">
          <div class="col-lg-8">
            <article>
              <h1 class="h3">{{ article.title }}</h1>
              <ul class="list-inline text-gray-dark my-3 d-flex align-items-center flex-wrap lh-lg">
                <li class="list-inline-item">
                  <div class="d-flex align-items-center"><span class="material-icons fs-5"> person </span>{{ article.author }}</div>
                </li>
                <li class="list-inline-item">
                  <div class="d-flex align-items-center"><span class="material-icons fs-5"> today </span>{{ $filters.date(article.create_at) }}</div>
                </li>
                <li class="list-inline-item">
                  <div class="d-flex align-items-center flex-wrap">
                    <span v-for="tag in article.tag" :key="tag" class="d-flex align-items-center me-1 flex-shrink-0"><span class="material-icons fs-6"> local_offer </span>{{ tag }}</span>
                  </div>
                </li>
              </ul>
              <img :src="article.image" :alt="article.title" class="img-fluid object-fit-cover mb-5" />
              <div v-html="article.content"></div>
            </article>
            <hr class="my-5 my-lg-10" />
            <div class="row justify-content-between">
              <div class="col-6" :class="{ 'border-end': currentIndex !== 0 && currentIndex !== articles.length - 1 }">
                <RouterLink :to="`/blogs/${articles[currentIndex - 1].id}`" class="d-flex align-items-center" v-if="articles[currentIndex - 1]">
                  <span class="material-icons me-2"> arrow_back_ios_new </span>
                  <div>
                    上一篇：<br />
                    {{ articles[currentIndex - 1].title }}
                  </div>
                </RouterLink>
              </div>
              <div class="col-6" v-if="articles[currentIndex + 1]">
                <RouterLink :to="`/blogs/${articles[currentIndex + 1].id}`" class="d-flex align-items-center justify-content-end">
                  <div class="text-end">
                    下一篇：<br />
                    {{ articles[currentIndex + 1].title }}
                  </div>
                  <span class="material-icons ms-2"> arrow_forward_ios </span>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="filterBlogs.length">
          <div class="col-lg-8">
            <div class="row row-cols-1 row-cols-md-2 gy-8 g-lg-10">
              <div v-for="article in filterBlogs" :key="article.id" class="col">
                <div class="card rounded-0 border-0">
                  <img :src="article.image" class="w-100 object-fit-cover rounded-0" :alt="article.title" height="250" />
                  <div class="card-body">
                    <div class="card-text d-flex justify-content-between text-gray-dark">
                      <p class="mb-2">{{ $filters.date(article.create_at) }}</p>
                      <p class="mb-2">
                        by <span class="text-dark">{{ article.author }}</span>
                      </p>
                    </div>

                    <h5 class="card-title text-truncate">{{ article.title }}</h5>
                    <p class="card-text line-clamp">{{ article.description }}</p>
                    <RouterLink :to="`/blogs/${article.id}`" class="stretched-link">閱讀更多 ></RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="filterTags.length">
          <div class="col-lg-8">
            <div class="row row-cols-1 row-cols-md-2 gy-8 g-lg-10">
              <div v-for="article in filterTags" :key="article.id" class="col">
                <div class="card rounded-0 border-0">
                  <img :src="article.image" class="w-100 object-fit-cover rounded-0" :alt="article.title" height="250" />
                  <div class="card-body">
                    <div class="card-text d-flex justify-content-between text-gray-dark">
                      <p class="mb-2">{{ $filters.date(article.create_at) }}</p>
                      <p class="mb-2">
                        by <span class="text-dark">{{ article.author }}</span>
                      </p>
                    </div>

                    <h5 class="card-title text-truncate">{{ article.title }}</h5>
                    <p class="card-text line-clamp">{{ article.description }}</p>
                    <RouterLink :to="`/blogs/${article.id}`" class="stretched-link">閱讀更多 ></RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="col-lg-3 offset-lg-1">
          <v-form v-slot="{ errors }" @submit="searchBlogs" ref="form" class="mb-5 mb-lg-10 position-relative">
            <label for="search" class="form-label mb-2 mb-lg-4"><h5>搜尋</h5></label>
            <div class="input-group mb-3">
              <v-field
                name="關鍵字"
                :class="{ 'is-invalid': errors['關鍵字'] }"
                rules="required"
                id="search"
                type="text"
                class="form-control"
                v-model.trim="searchInput"
                placeholder="請輸入關鍵字"
                aria-label="請輸入關鍵字"
              ></v-field>
              <button type="submit" class="btn btn-primary d-flex align-items-center" :disabled="errors['關鍵字']">
                <span class="material-icons"> search </span>
              </button>

              <error-message name="關鍵字" class="invalid-feedback"></error-message>
            </div>
            <p class="text-danger text-center">{{ noResultMessage }}</p>
          </v-form>
          <h5 class="mb-2 mb-lg-4">Tags</h5>
          <div class="d-flex flex-wrap align-items-center ps-2 ps-lg-0 mb-5 mb-lg-10">
            <template v-for="tag in allTags" :key="tag">
              <a href="#" @click.prevent="searchTag(tag)" class="d-flex align-items-center me-2 mb-2 text-dark tag-hover"><span class="material-icons fs-5"> local_offer </span>{{ tag }}</a>
            </template>
          </div>
          <h5 class="mb-2 mb-lg-4">最新文章</h5>
          <template v-for="(article, key) in articles" :key="article.id">
            <template v-if="key < 3">
              <RouterLink :to="`/blogs/${article.id}`">
                <p class="mb-2">{{ article.title }}</p>
              </RouterLink>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'pinia';
  import blogsStore from '@/store/blogsStore.js';
  import { RouterLink } from 'vue-router';
  import Toast from '@/mixins/toast.js';
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        article: '',
        isLoading: false,
        currentIndex: 0,
        searchInput: '',
        filterBlogs: [],
        allTags: ['純素飲食', '初學者', '素食主義', '健康飲食', '營養均衡', '氣候變遷', '綠色生活', '環保', '植物蛋白', '高蛋白飲食', '食譜'],
        filterTags: [],
        breadcrumbTag: '',
        noResultMessage: '',
      };
    },
    components: {
      RouterLink,
    },
    methods: {
      ...mapActions(blogsStore, ['getArticles']),
      getArticle() {
        const { id } = this.$route.params;
        this.isLoading = true;
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/article/${id}`)
          .then((res) => {
            this.isLoading = false;
            this.article = res.data.article;
            this.findIndex();
            this.filterBlogs = [];
            this.filterTags = [];
            this.$refs.form.resetForm();
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      findIndex() {
        this.currentIndex = this.articles.findIndex((item) => item.id === this.article.id);
      },
      searchBlogs() {
        this.filterBlogs = this.articles.filter((article) => article.title.match(this.searchInput));
        this.$route.params.id = '';
        this.noResultMessage = '';
        if (!this.filterBlogs.length) {
          this.noResultMessage = '無相關搜尋結果！';
        }
        this.$refs.form.resetForm();
      },
      searchTag(tag) {
        this.filterTags = this.articles.filter((article) => article.tag.includes(tag));
        this.breadcrumbTag = tag;
        this.$route.params.id = '';
        this.noResultMessage = '';
        this.$refs.form.resetForm();
      },
    },
    computed: {
      ...mapState(blogsStore, ['articles']),
    },
    watch: {
      '$route.params': {
        immediate: true,
        handler() {
          if (this.$route.params.id) {
            this.getArticle();
            this.noResultMessage = '';
          }
        },
      },
      noResultMessage() {
        return this.noResultMessage;
      },
    },
    mounted() {
      this.getArticles();
      this.getArticle();
    },
  };
</script>

<style lang="scss" scoped>
  .line-clamp {
    @include line-clamp(2);
  }
  .tag-hover:hover {
    color: #4f8147 !important;
  }
</style>

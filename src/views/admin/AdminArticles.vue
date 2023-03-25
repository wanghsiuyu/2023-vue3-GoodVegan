<template>
  <div class="container mt-20">
    <div class="text-end m-5">
      <button type="button" class="btn btn-primary" @click="openModal('create')">新增貼文</button>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">文章標題</th>
              <th scope="col">作者</th>
              <th scope="col">描述</th>
              <th scope="col">建立時間</th>
              <th scope="col">是否公開</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in articles" :key="article.id">
              <td>{{ article.title }}</td>
              <td>{{ article.author }}</td>
              <td>{{ article.description }}</td>
              <td>{{ new Date(article.create_at * 1000).toLocaleDateString() }}</td>
              <td>
                <span v-if="article.isPublic" class="text-success">已公開</span>
                <span v-else class="text-danger">未公開</span>
              </td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-1" @click="getArticle(article.id)">編輯</button>
                <button class="btn btn-sm btn-outline-danger" @click="openModal('delete', article)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <ArticleModal ref="modal" :article="tempArticle" :isNew="isNew" @updateArticle="updateArticle"></ArticleModal>
  <DeleteArticleModal ref="deleteModal" :article="tempArticle" @deleteArticle="deleteArticle"></DeleteArticleModal>

  <AdminPagination :pages="page" @change-page="getArticles"></AdminPagination>
</template>

<script>
  import ArticleModal from '@/components/admin/ArticleModal.vue';
  import DeleteArticleModal from '@/components/admin/DeleteArticleModal.vue';
  import AdminPagination from '@/components/admin/AdminPagination.vue';
  import Toast from '@/mixins/toast.js';
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        articles: {},
        tempArticle: {
          tag: [],
        },
        isNew: true,
        page: {},
      };
    },
    components: { ArticleModal, DeleteArticleModal, AdminPagination },
    methods: {
      checkLogin() {
        this.$http
          .post(`${VITE_URL}/api/user/check`)
          .then(() => {
            this.getArticles();
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
            this.$router.push('/login');
          });
      },
      openModal(status, article) {
        if (status === 'create') {
          this.tempArticle = {
            tag: [],
            create_at: new Date().getTime() / 1000,
            isPublic: false,
          };
          this.isNew = true;
          this.$refs.modal.articleModal.show();
        } else if (status === 'delete') {
          this.tempArticle = { ...article };
          this.$refs.deleteModal.deleteArticleModal.show();
        }
      },
      getArticles(page = 1) {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/admin/articles?page=${page}`)
          .then((res) => {
            this.articles = res.data.articles;
            this.page = res.data.pagination;
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      getArticle(id) {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/admin/article/${id}`)
          .then((res) => {
            this.$refs.modal.articleModal.show();
            this.tempArticle = res.data.article;
            this.isNew = false;
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      updateArticle() {
        let method = 'post';
        let url = `${VITE_URL}/api/${VITE_PATH}/admin/article`;
        if (!this.isNew) {
          method = 'put';
          url = `${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`;
        }
        this.$http[method](url, { data: this.tempArticle })
          .then((res) => {
            this.$refs.modal.articleModal.hide();
            Toast.fire({
              icon: 'success',
              title: res.data.message,
              width: 250,
            });
            this.getArticles();
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      deleteArticle() {
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`)
          .then((res) => {
            Toast.fire({
              icon: 'success',
              title: res.data.message,
              width: 250,
            });
            this.$refs.deleteModal.deleteArticleModal.hide();
            this.getArticles();
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
    mounted() {
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common['Authorization'] = myCookie;
      this.checkLogin();
    },
  };
</script>

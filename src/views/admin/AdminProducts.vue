<template>
  <div class="container mt-20">
    <div class="text-end m-5">
      <button type="button" class="btn btn-primary" @click="openModal('create')">建立新的產品</button>
    </div>
    <div class="row">
      <!-- 商品列表 start -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">商品 ID</th>
            <th scope="col">類別</th>
            <th scope="col">商品名稱</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col">是否上架</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td scope="row">{{ product.id }}</td>
            <td>{{ product.selectCategories }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.origin_price }}</td>
            <td>{{ product.price }}</td>
            <td>
              <span v-if="product.is_enabled" class="text-success">上架</span>
              <span v-else>下架</span>
            </td>
            <td>
              <button type="button" class="btn btn-outline-primary btn-sm me-1" @click="openModal('edit', product)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', product)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 商品列表 end -->
      <!-- productModal-->
      <div class="modal fade" ref="productModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <ProductModalAll :product="tempProduct" :isNew="isNew" @update-product="updateProduct" @createImage="createImage"></ProductModalAll>
      </div>
      <!-- deleteModal-->
      <div class="modal fade" ref="deleteModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <DeleteProductModal :tempProduct="tempProduct" :deleteProduct="deleteProduct"></DeleteProductModal>
      </div>
      <!-- 商品分頁 -->
      <AdminPagination :pages="page" @change-page="getProduct"></AdminPagination>
    </div>
  </div>
</template>
<script>
  import AdminPagination from '../../components/admin/AdminPagination.vue';
  import ProductModalAll from '../../components/admin/ProductModal.vue';
  import Modal from 'bootstrap/js/dist/modal';
  import DeleteProductModal from '../../components/admin/DeleteProductModal.vue';
  let productModal;
  let deleteModal;
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        products: [],
        tempProduct: {
          features: ['純素', '有機', '無麩質', '辣'],
          checkboxFeatures: [],
          categories: ['超飽足果昔盆', '輕食冷盤', '湯品', '裸食甜點', '果昔飲品'],
          selectCategories: '',
          category: '1', // 必填，已用 categories 取代
          imagesUrl: [],
        },
        isNew: false,
        page: {},
      };
    },
    components: {
      AdminPagination,
      ProductModalAll,
      DeleteProductModal,
    },
    methods: {
      checkLogin() {
        this.$http
          .post(`${VITE_URL}/api/user/check`)
          .then(() => {
            this.getProduct();
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.$router.push('/login');
          });
      },
      getProduct(page = 1) {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/admin/products/?page=${page}`)
          .then((res) => {
            this.products = res.data.products;
            this.page = res.data.pagination;
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      updateProduct() {
        // 新增
        let url = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
        let method = 'post';
        let message = '新增產品成功！';
        // 編輯
        if (!this.isNew) {
          url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
          method = 'put';
          message = '編輯產品成功！';
        }
        this.$http[method](url, { data: this.tempProduct })
          .then(() => {
            this.getProduct();
            productModal.hide();
            alert(message);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      deleteProduct() {
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`)
          .then(() => {
            this.getProduct();
            deleteModal.hide();
            alert('刪除產品成功！');
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      createImage() {
        this.tempProduct.imagesUrl = [];
        this.tempProduct.imagesUrl.push('');
      },
      openModal(status, product) {
        if (status === 'create') {
          // 新增
          productModal.show();
          this.isNew = true;
          this.tempProduct = {
            features: ['純素', '有機', '無麩質', '辣'],
            checkboxFeatures: [],
            categories: ['超飽足果昔盆', '輕食冷盤', '湯品', '裸食甜點', '果昔飲品'],
            selectCategories: '',
            category: '1', // 必填，已用 categories 取代
            imagesUrl: [],
          };
        } else if (status === 'edit') {
          // 編輯
          productModal.show();
          this.isNew = false;
          this.tempProduct = { ...product };
        } else if (status === 'delete') {
          // 刪除
          deleteModal.show();
          this.tempProduct = { ...product };
        }
      },
    },

    mounted() {
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common['Authorization'] = myCookie;
      this.checkLogin();
      this.getProduct();
      productModal = new Modal(this.$refs.productModal);
      deleteModal = new Modal(this.$refs.deleteModal);
    },
  };
</script>

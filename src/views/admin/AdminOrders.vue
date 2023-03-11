<template>
  <div class="container mt-20">
    <div class="text-end m-5">
      <button v-if="orders?.length" type="button" class="btn btn-outline-danger" @click="openModal('deleteAll')">刪除全部訂單</button>
    </div>
    <!-- 訂單列表 start -->
    <div class="row">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">訂單編號</th>
            <th scope="col">訂單日期</th>
            <th scope="col">訂購人</th>
            <th scope="col">訂單品項</th>
            <th scope="col">總金額</th>
            <th scope="col">是否付款</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ new Date(order.create_at * 1000).toLocaleDateString() }}</td>
            <td>{{ order.user.name }}</td>
            <td>
              <span v-for="product in order.products" :key="product.product_id"> {{ product.product.title }}<br /> </span>
            </td>
            <td>NT${{ order.total + parseInt(order.total >= 500 ? 0 : 100) }}</td>
            <td>
              <span v-if="order.is_paid" class="text-success">是</span>
              <span v-else class="text-danger">否</span>
            </td>
            <td>
              <button type="button" class="btn btn-outline-primary btn-sm me-1" @click="($event) => openModal('edit', order)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="($event) => openModal('delete', order)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 訂單列表 end-->
      <!-- OrderModal -->
      <div class="modal fade" ref="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <OrderModal :order="order" @confirmEdit="confirmEdit"></OrderModal>
      </div>
      <!-- DeleteOrderModal -->
      <div class="modal fade" ref="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <DeleteOrderModal :order="order" @deleteOrder="deleteOrder" @deleteOrdersAll="deleteOrdersAll"></DeleteOrderModal>
      </div>
      <!-- 訂單分頁 -->
      <AdminPagination :pages="page" @change-page="getOrders"></AdminPagination>
    </div>
  </div>
</template>
<script>
  import Modal from 'bootstrap/js/dist/modal';
  import AdminPagination from '../../components/admin/AdminPagination.vue';
  import OrderModal from '../../components/admin/OrderModal.vue';
  import DeleteOrderModal from '../../components/admin/DeleteOrderModal.vue';
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        orders: [],
        order: {},
        editModal: '',
        deleteModal: '',
        page: {},
      };
    },
    components: {
      OrderModal,
      DeleteOrderModal,
      AdminPagination,
    },
    methods: {
      checkLogin() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common['Authorization'] = myCookie;
        this.$http
          .post(`${VITE_URL}/api/user/check`)
          .then(() => {
            this.getOrders();
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.$router.push('/login');
          });
      },
      getOrders(page = 1) {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/admin/orders/?page=${page}`)
          .then((res) => {
            this.orders = res.data.orders;
            this.page = res.data.pagination;
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      confirmEdit() {
        this.$http
          .put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${this.order.id}`, { data: this.order })
          .then((res) => {
            alert(res.data.message);
            this.editModal.hide();
            this.getOrders();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      deleteOrder() {
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${this.order.id}`)
          .then((res) => {
            alert(res.data.message);
            this.deleteModal.hide();
            this.getOrders();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      deleteOrdersAll() {
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/admin/orders/all`)
          .then((res) => {
            alert(res.data.message);
            this.deleteModal.hide();
            this.getOrders();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      openModal(status, order) {
        if (status === 'edit') {
          this.editModal.show();
          this.order = { ...order };
        } else if (status === 'delete') {
          this.deleteModal.show();
          this.order = { ...order };
        } else if (status === 'deleteAll') {
          this.order = {};
          this.deleteModal.show();
        }
      },
    },
    mounted() {
      this.checkLogin();
      this.getOrders();
      this.editModal = new Modal(this.$refs.editModal);
      this.deleteModal = new Modal(this.$refs.deleteModal);
    },
  };
</script>

<template>
  <div class="container mt-20">
    <div class="text-end m-5">
      <button type="button" class="btn btn-primary" @click="openModal('create')">新增優惠券</button>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">優惠券名稱</th>
              <th scope="col">優惠碼</th>
              <th scope="col">折扣百分比</th>
              <th scope="col">到期日</th>
              <th scope="col">是否啟用</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coupon in coupons" :key="coupon.id">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.code }}</td>
              <td>{{ coupon.percent }}%</td>
              <td>{{ new Date(coupon.due_date * 1000).toLocaleDateString() }}</td>
              <td>
                <span v-if="coupon.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-danger">未啟用</span>
              </td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-1" @click="openModal('edit', coupon)">編輯</button>
                <button class="btn btn-sm btn-outline-danger" @click="openModal('delete', coupon)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <CouponModal ref="modal" :coupon="tempCoupon" @updateCoupon="updateCoupon" :isNew="isNew"></CouponModal>
  <DeleteCouponModal ref="deleteModal" :coupon="tempCoupon" @deleteCoupon="deleteCoupon"></DeleteCouponModal>

  <AdminPagination :pages="page" @change-page="getCoupons"></AdminPagination>
</template>

<script>
  import CouponModal from '@/components/admin/CouponModal.vue';
  import DeleteCouponModal from '@/components/admin/DeleteCouponModal.vue';
  import AdminPagination from '@/components/admin/AdminPagination.vue';
  import Toast from '@/mixins/toast.js';
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        coupons: {},
        tempCoupon: {
          title: '',
          is_enabled: 0,
          percent: 100,
          code: '',
        },
        isNew: true,
        page: {},
      };
    },
    components: { CouponModal, DeleteCouponModal, AdminPagination },
    methods: {
      checkLogin() {
        this.$http
          .post(`${VITE_URL}/api/user/check`)
          .then(() => {
            this.getCoupons();
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
      openModal(status, coupon) {
        if (status === 'create') {
          this.tempCoupon = {
            is_enabled: 0,
            due_date: new Date().getTime() / 1000,
          };
          this.isNew = true;
          this.$refs.modal.couponModal.show();
        } else if (status === 'edit') {
          this.tempCoupon = { ...coupon };
          this.isNew = false;
          this.$refs.modal.couponModal.show();
        } else if (status === 'delete') {
          this.tempCoupon = { ...coupon };
          this.$refs.deleteModal.deleteCouponModal.show();
        }
      },
      updateCoupon() {
        let method = 'post';
        let url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
        if (!this.isNew) {
          method = 'put';
          url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`;
        }
        this.$http[method](url, { data: this.tempCoupon })
          .then((res) => {
            this.$refs.modal.couponModal.hide();
            Toast.fire({
              icon: 'success',
              title: res.data.message,
              width: 250,
            });
            this.getCoupons();
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      deleteCoupon() {
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`)
          .then((res) => {
            this.$refs.deleteModal.deleteCouponModal.hide();
            Toast.fire({
              icon: 'success',
              title: res.data.message,
              width: 250,
            });
            this.getCoupons();
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      getCoupons(page = 1) {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`)
          .then((res) => {
            this.coupons = res.data.coupons;
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
    },
    mounted() {
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common['Authorization'] = myCookie;
      this.checkLogin();
    },
  };
</script>

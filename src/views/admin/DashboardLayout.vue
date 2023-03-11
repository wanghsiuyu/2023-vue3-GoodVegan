<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-2 bg-light py-12">
        <div class="text-center mb-10">
          <img src="../../assets/image/logo2.png" alt="logo" class="img-fluid mb-6 px-5" />
          <div class="d-flex flex-column align-items-center">
            <img src="../../assets/image/brain.png" alt="avatar" class="rounded-circle mb-1" width="60" />
            <small class="fw-bold">Brian Wu</small>
          </div>
        </div>
        <ul class="nav flex-column px-5">
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">商品管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">訂單管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">回前台首頁</RouterLink>
          </li>
          <li class="nav-item mt-5">
            <a href="#" class="nav-link d-flex align-items-center" @click.prevent="logout"><span class="material-icons"> logout </span>登出</a>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router';
  const { VITE_URL } = import.meta.env;
  export default {
    components: {
      RouterLink,
      RouterView,
    },
    methods: {
      checkLogin() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common['Authorization'] = myCookie;
        this.$http.post(`${VITE_URL}/api/user/check`).catch((err) => {
          alert(err.response.data.message);
          this.$router.push('/login');
        });
      },
      logout() {
        document.cookie = `myToken=; expires= ${new Date()};`;
        this.$router.push('/login');
      },
    },
    mounted() {
      this.checkLogin();
    },
  };
</script>
<style lang="scss">
  .nav-link {
    border-left: 4px solid transparent;
  }
  .nav-link.active {
    border-left: 4px solid #a8cf45;
    font-weight: bold;
  }
</style>

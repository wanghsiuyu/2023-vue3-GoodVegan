<template class="">
  <div class="bg-light">
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-4 bg-primary-light" style="height: 450px">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-10">
              <div class="text-center">
                <img src="../../assets/image/logo2.png" alt="logo" class="mb-3" />
              </div>
              <h2 class="fs-5 text-center mb-3">後台管理系統</h2>
              <div class="text-center">
                <img src="../../assets/image/login-img.svg" alt="login-img" width="200" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 bg-white" style="height: 450px">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-9">
              <h2 class="fs-3 mb-2">登入</h2>
              <h3 class="fs-6 mb-3"><small>觀迎回來，請登入您的帳號</small></h3>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.username" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password" />
                <label for="floatingPassword">Password</label>
              </div>
              <button type="button" class="btn btn-primary w-100 mb-3" @click="login">登入</button>
              <div class="text-center">
                <RouterLink to="/">回前台首頁</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const { VITE_URL } = import.meta.env;
  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      login() {
        this.$http
          .post(`${VITE_URL}/admin/signin`, this.user)
          .then((res) => {
            const { token, expired } = res.data;
            document.cookie = `myToken=${token}; expires= ${new Date(expired)};`;
            this.$router.push('/admin/products');
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.email = '';
            this.password = '';
          });
      },
    },
  };
</script>

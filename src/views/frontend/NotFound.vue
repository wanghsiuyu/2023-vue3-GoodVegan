<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-5 text-center">
        <img src="@/assets/image/404.svg" alt="404" width="300" height="250" class="mb-4 img-fluid" />
        <h1 class="mb-4">404 ERROR! <br /><small>您找的網頁不存在</small></h1>
        <p>{{ count }} 秒後自動跳轉至首頁</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 3,
      };
    },
    mounted() {
      setInterval(() => {
        this.count--;
        if (this.count === 0) {
          this.$router.push('/');
        }
      }, 1000);
    },
  };
</script>

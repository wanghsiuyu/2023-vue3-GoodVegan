<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- banner start-->
  <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">訂單確認</h1>
        </div>
      </div>
    </div>
  </section>
  <!-- banner end-->
  <section class="container">
    <!-- breadcrumb start-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/products" class="green">線上訂餐</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">訂單確認</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <div class="row justify-content-center mb-20 mb-lg-8">
      <!-- 購物車 start -->
      <div class="col-8">
        <div class="mb-5">
          <h2 class="h3 text-center">購物車</h2>
          <h4 v-if="!cartsTotal.carts?.length" class="text-center">購物車沒有任何品項</h4>
          <div v-else>
            <div class="text-end my-4">
              <button type="button" class="btn btn-outline-secondary" @click="removeCartsAll">清空購物車</button>
            </div>
            <table class="table align-middle">
              <tbody>
                <tr class="border-bottom">
                  <td></td>
                  <td>品項</td>
                  <td></td>
                  <td>單價</td>
                  <td>數量</td>
                  <td class="text-center">價格</td>
                </tr>
                <tr v-for="cart in cartsTotal.carts" :key="cart.id">
                  <td>
                    <a role="button" class="text-end" title="刪除品項" @click.prevent="removeCart(cart.id)" :disabled="loadingStatus === cart.id">
                      <i class="fas fa-spinner fa-pulse" v-if="loadingStatus === cart.id"></i>
                      <span v-else class="material-icons fs-6 text-dark"> close </span>
                    </a>
                  </td>
                  <td>
                    <img :src="cart.product.imageUrl" class="img-cover" width="90" height="90" alt="cart.product.title" />
                  </td>
                  <td class="text-start">{{ cart.product.title }}</td>
                  <td class="text-start">NT${{ cart.product.price }} / {{ cart.product.unit }}</td>
                  <td>
                    <select v-model="cart.qty" class="form-select" @change="setCartQty(cart)" :disabled="loadingStatus === cart.id">
                      <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
                    </select>
                  </td>
                  <td class="text-end">NT${{ cart.total }}</td>
                </tr>
                <tr>
                  <td colspan="4">小計</td>
                  <td colspan="2" class="text-end">NT${{ cartsTotal.total }}</td>
                </tr>
                <tr class="border-bottom">
                  <td colspan="4">
                    運費
                    <span v-if="cartsTotal.total < 500" class="text-danger">（消費滿 $500，即可享免運優惠！）</span>
                    <span v-else class="text-danger">（恭禧您已達免運門檻！）</span>
                  </td>
                  <td colspan="2" class="text-end">NT${{ shipping }}</td>
                </tr>
                <tr>
                  <td colspan="4" class="fs-5">總計</td>
                  <td colspan="2" class="fs-5 text-end">NT${{ cartsTotal.final_total + shipping }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- 購物車 end -->
      <!-- 訂單連絡資訊 start -->
      <div class="col-6">
        <div class="mb-5">
          <v-form v-slot="{ errors }" @submit="onSubmit" ref="form">
            <h2 class="h3 text-center">訂單連絡資訊</h2>
            <div class="mb-4">
              <label for="name" class="form-label">姓名<span class="text-danger">*</span></label>
              <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="王小明" rules="required" v-model="user.name"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-4">
              <label for="phone" class="form-label">手機<span class="text-danger">*</span></label>
              <v-field id="phone" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="0912345678" :rules="isPhone" v-model="user.tel"></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">信箱<span class="text-danger">*</span></label>
              <v-field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="name@email.com"
                rules="email|required"
                v-model="user.email"
              ></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" value="" id="subscribe" checked />
              <label class="form-check-label" for="subscribe">願意收到好蔬房的相關訊息和優惠資訊</label>
            </div>
            <div class="mb-4">
              <label for="address" class="form-label">外送地址<span class="text-danger">*</span>（到店自取者請填寫「自取」）</label>
              <v-field
                id="address"
                name="外送地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['外送地址'] }"
                placeholder="自取／○○區○街○巷○號"
                rules="required"
                v-model="user.address"
              ></v-field>
              <error-message name="外送地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-4">
              <label for="message" class="form-label">訂單備註</label>
              <v-field as="textarea" id="message" name="訂單備註" class="form-control" rows="5" v-model="message" style="resize: none"></v-field>
            </div>
            <div class="mb-4">
              <p>註：<span class="text-danger">*</span>為必填欄位</p>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-secondary btn-lg">送出訂單</button>
            </div>
          </v-form>
        </div>
      </div>
      <!-- 訂單連絡資訊 end -->
    </div>
  </section>
</template>
<script>
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    data() {
      return {
        isLoading: false,
        loadingStatus: '',
        cartsTotal: [],
        shipping: 0,
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      };
    },
    methods: {
      loading() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      },
      getCart() {
        this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
          .then((res) => {
            this.cartsTotal = res.data.data;
            this.shipping = parseInt(this.cartsTotal.total >= 500 ? 0 : 100);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      removeCart(id) {
        this.loadingStatus = id;
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
          .then((res) => {
            this.loadingStatus = '';
            alert(res.data.message);
            this.getCart();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      removeCartsAll() {
        this.$http
          .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
          .then((res) => {
            alert(res.data.message);
            this.getCart();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      setCartQty(cart) {
        const data = {
          product_id: cart.product_id,
          qty: cart.qty,
        };
        this.loadingStatus = cart.id;
        this.$http
          .put(`${VITE_URL}/api/${VITE_PATH}/cart/${cart.id}`, { data })
          .then((res) => {
            this.loadingStatus = '';
            alert(res.data.message);
            this.getCart();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      onSubmit() {
        if (this.cartsTotal.carts.length) {
          this.loading();
          const data = {
            user: this.user,
            message: this.message,
          };
          this.$http
            .post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
            .then((res) => {
              alert(res.data.message);
              this.loading();
              this.getCart();
              this.$refs.form.resetForm();
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        } else {
          alert('目前購物車沒有任何品項，無法送出訂單。');
        }
      },
      isPhone(value) {
        const phoneNumber = /^(09)[0-9]{8}$/;
        return phoneNumber.test(value) ? true : '需為正確的手機號碼格式';
      },
    },
    mounted() {
      this.getCart();
    },
  };
</script>
<style lang="scss" scoped>
  .banner {
    @include banner('https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', bottom, cover);
  }
  .banner-plan {
    @include banner-plan();
  }
</style>

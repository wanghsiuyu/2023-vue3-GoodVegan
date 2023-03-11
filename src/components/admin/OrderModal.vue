<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="staticBackdropLabel">編輯</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <div class="card border-gray rounded-0 mb-5">
                <div class="card-body">
                  <h5 class="card-title mb-5">訂單資料</h5>
                  <form>
                    <div class="mb-3">
                      <label for="orderId" class="form-label">訂單編號</label>
                      <input type="text" class="form-control" id="orderId" aria-describedby="emailHelp" :value="tempOrder.id" readonly />
                    </div>
                    <div class="mb-3">
                      <label for="orderDate" class="form-label">訂單日期</label>
                      <input type="text" class="form-control" id="orderDate" :value="new Date(order.create_at * 1000).toLocaleDateString()" readonly />
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" v-model="tempOrder.is_paid" id="isPaid" />
                      <label class="form-check-label" for="isPaid"
                        >是否付款：
                        <span v-if="tempOrder.is_paid" class="text-success">是</span>
                        <span v-else class="text-danger">否</span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card border-gray rounded-0">
                <div class="card-body">
                  <h5 class="card-title mb-5">訂購人資訊</h5>
                  <form>
                    <div class="mb-3">
                      <label for="username" class="form-label">訂購人</label>
                      <input type="text" class="form-control" id="username" :value="tempOrder.user?.name" readonly aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">訂購人手機</label>
                      <input type="tel" class="form-control" id="phone" :value="tempOrder.user?.tel" readonly />
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">外送地址</label>
                      <input type="text" class="form-control" id="address" :value="tempOrder.user?.address" readonly />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">訂購人 Email</label>
                      <input type="email" class="form-control" id="email" :value="tempOrder.user?.email" readonly />
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">訂單備註</label>
                      <textarea type="text" class="form-control" id="message" style="resize: none" :value="tempOrder.message" readonly></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="card border-gray rounded-0 mb-5">
                <div class="card-body">
                  <h5 class="card-title mb-5">訂購內容</h5>
                  <table class="table align-middle">
                    <thead>
                      <tr>
                        <td colspan="2">品項</td>
                        <td>單價</td>
                        <td>數量</td>
                        <td class="text-end">價格</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in tempOrder.products" :key="product.id">
                        <td>
                          <img :src="product.product.imageUrl" :alt="product.product.title" width="90" height="90" class="object-fit-cover" />
                        </td>
                        <td>
                          <p class="mb-0">{{ product.product.title }}</p>
                        </td>
                        <td>NT${{ product.product.price }} / {{ product.product.unit }}</td>
                        <td class="text-center">{{ product.qty }}</td>
                        <td class="text-end">NT${{ product.final_total }}</td>
                      </tr>
                      <tr>
                        <td colspan="4">小計</td>
                        <td class="text-end">NT${{ tempOrder.total }}</td>
                      </tr>
                      <tr>
                        <td colspan="4">運費</td>
                        <td class="text-end">NT${{ shipping }}</td>
                      </tr>
                      <tr>
                        <td colspan="4" class="fs-3">總金額</td>
                        <td class="text-end fs-3">NT${{ tempOrder.total + shipping }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="$emit('confirmEdit', tempOrder)">確認</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['order'],
    data() {
      return {
        tempOrder: {},
        shipping: 0,
      };
    },
    watch: {
      order() {
        this.tempOrder = this.order;
        this.shipping = parseInt(this.tempOrder.total >= 500 ? 0 : 100);
      },
    },
  };
</script>

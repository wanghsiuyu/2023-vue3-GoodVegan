<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h5 class="modal-title text-white" id="exampleModalLabel">{{ isNew ? '新增' : '編輯' }}商品</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-4">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input type="text" class="form-control mb-2" id="imageUrl" aria-describedby="imageUrl" placeholder="請輸入圖片連結 或 選擇上傳圖片" v-model="tempProduct.imageUrl" />
                <img v-if="tempProduct.imageUrl" :src="tempProduct.imageUrl" class="img-fluid" />
              </div>
              <div class="mb-10">
                <label for="file" class="form-label">上傳圖片</label>
                <input type="file" class="form-control" id="file" ref="file" @change="upload" />
              </div>
              <div class="mb-2">
                <label class="form-label">新增其他圖片</label>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template v-for="(image, key) in tempProduct.imagesUrl" :key="key + 1234">
                    <input type="text" class="form-control mb-2" placeholder="請輸入圖片連結 或 選擇上傳圖片" v-model="tempProduct.imagesUrl[key]" />
                    <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid mb-2" />
                  </template>
                  <button
                    v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]"
                    type="button"
                    class="btn btn-outline-primary w-100 mb-2"
                    @click="tempProduct.imagesUrl.push('')"
                  >
                    新增欄位
                  </button>
                  <button v-else type="button" class="btn btn-outline-danger w-100" @click="tempProduct.imagesUrl.pop()">刪除欄位</button>
                </div>
                <div v-else>
                  <button type="button" class="btn btn-outline-primary w-100 mb-2" @click="$emit('createImage')">新增欄位</button>
                </div>
              </div>
              <div>
                <label for="files" class="form-label">上傳其他圖片</label>
                <input type="file" class="form-control" id="files" ref="files" @change="upload" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="mb-3">
                <label for="productName" class="form-label">商品名稱</label>
                <input type="text" class="form-control" id="productName" aria-describedby="productName" placeholder="請輸入商品名稱" v-model="tempProduct.title" />
              </div>
              <div class="mb-3">
                <label class="form-label w-100">商品特性</label>
                <div class="form-check form-check-inline" v-for="feature in tempProduct.features" :key="feature">
                  <input class="form-check-input" :id="feature" type="checkbox" :value="feature" v-model="tempProduct.checkboxFeatures" />
                  <label class="form-check-label" :for="feature">{{ feature }}</label>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="productCategory" class="form-label w-100">類別</label>
                  <select id="productCategory" name="productCategory" class="form-select" v-model="tempProduct.selectCategories">
                    <option value="" disabled>請選擇類別</option>
                    <option v-for="item in tempProduct.categories" :key="item" :value="item">{{ item }}</option>
                  </select>
                </div>
                <div class="col">
                  <label for="productUnit" class="form-label">單位</label>
                  <input type="text" class="form-control" id="productUnit" aria-describedby="productUnit" placeholder="請輸入單位" v-model="tempProduct.unit" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="productOriginPrice" class="form-label">原價</label>
                  <input type="number" class="form-control" id="productOriginPrice" aria-describedby="productOriginPrice" placeholder="請輸入原價" v-model.number="tempProduct.origin_price" />
                </div>
                <div class="col">
                  <label for="productPrice" class="form-label">售價</label>
                  <input type="number" class="form-control" id="productPrice" aria-describedby="productPrice" placeholder="請輸入售價" v-model.number="tempProduct.price" />
                </div>
              </div>
              <div class="mb-3">
                <label for="productDescription" class="form-label">商品介紹</label>
                <textarea
                  class="form-control"
                  id="productDescription"
                  aria-describedby="productDescription"
                  placeholder="請輸入商品介紹"
                  v-model="tempProduct.description"
                  style="height: 100px; resize: none"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="productContent" class="form-label">內容物</label>
                <input type="text" class="form-control" id="productContent" aria-describedby="productContent" placeholder="請輸入內容物" v-model="tempProduct.content" />
              </div>
              <div class="mb-3">
                <label for="productLocation" class="form-label">產地</label>
                <input type="text" class="form-control" id="productLocation" aria-describedby="productLocation" placeholder="請輸入產地" v-model="tempProduct.location" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="isEnabled" v-model="tempProduct.is_enabled" value="" />
                <label for="isEnabled" class="form-check-label">是否上架</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="$emit('update-product', tempProduct)">確認</button>
      </div>
    </div>
  </div>
</template>
<script>
  const { VITE_URL, VITE_PATH } = import.meta.env;
  export default {
    props: ['product', 'isNew'],
    data() {
      return {
        tempProduct: {},
      };
    },
    methods: {
      upload() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common['Authorization'] = myCookie;
        const { file, files } = this.$refs;
        const uploadFile = file.files[0] ? file.files[0] : files.files[0];
        const formData = new FormData();
        formData.append('file-to-upload', uploadFile);
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
          .then((res) => {
            if (file.files[0]) {
              this.tempProduct.imageUrl = res.data.imageUrl;
              file.value = '';
            } else if (files.files[0]) {
              this.tempProduct.imagesUrl.push(res.data.imageUrl);
              files.value = '';
            }
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
    },
    watch: {
      product() {
        this.tempProduct = this.product;
      },
    },
  };
</script>

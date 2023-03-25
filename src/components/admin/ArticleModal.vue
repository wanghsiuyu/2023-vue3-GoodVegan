<template>
  <div class="modal fade" id="exampleModal" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-white" id="exampleModalLabel">{{ isNew ? '新增' : '編輯' }}貼文</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="mb-3">
                  <label for="title" class="form-label">文章標題</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入文章標題" v-model="tempArticle.title" />
                </div>
                <div class="mb-3">
                  <label for="image" class="form-label">上傳圖片</label>
                  <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="tempArticle.image" />
                </div>
                <div class="mb-3">
                  <label for="author" class="form-label">作者</label>
                  <input type="text" class="form-control" id="author" placeholder="請輸入作者名稱" v-model="tempArticle.author" />
                </div>
                <div class="mb-3">
                  <label for="author" class="form-label">建立日期</label>
                  <input type="date" class="form-control" id="author" v-model="create_at" />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="mb-3">
                  <label class="form-label">標籤</label>
                  <div class="row g-1">
                    <template v-if="tempArticle.tag?.length">
                      <div v-for="(tag, key) in tempArticle.tag" :key="key + 1234" class="col-md-2">
                        <div class="input-group input-group-sm">
                          <input type="text" class="form-control" placeholder="請輸入標籤" v-model="tempArticle.tag[key]" />
                          <button class="btn btn-outline-danger" type="button" @click="tempArticle.tag.pop()">x</button>
                        </div>
                      </div>
                      <div v-if="tempArticle.tag[tempArticle.tag.length - 1]" class="col-md-2">
                        <button class="btn btn-sm btn-outline-primary w-100" @click="tempArticle.tag.push('')">新增標籤</button>
                      </div>
                    </template>
                    <template v-else>
                      <button class="btn btn-sm btn-outline-primary col-md-2" @click="tempArticle.tag.push('')">新增標籤</button>
                    </template>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">文章描述</label>
                  <textarea type="text" class="form-control mb-3" id="description" placeholder="請輸入文章描述" v-model="tempArticle.description"></textarea>
                  <ckeditor :editor="editor" v-model="tempArticle.content" :config="editorConfig"></ckeditor>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="isPublic" v-model="tempArticle.isPublic" />
                  <label for="isPublic" class="form-check-label">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('updateArticle', tempArticle)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from 'bootstrap/js/dist/modal';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
    props: ['article', 'isNew'],
    data() {
      return {
        articleModal: '',
        tempArticle: {},
        create_at: '',
        editor: ClassicEditor,
        editorData: '',
        editorConfig: {
          toolbar: ['heading', '|', 'bold', 'italic', 'link'],
        },
      };
    },
    watch: {
      article() {
        this.tempArticle = this.article;
        [this.create_at] = new Date(this.tempArticle.create_at * 1000).toISOString().split('T');
      },
      create_at() {
        this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
      },
    },
    mounted() {
      this.articleModal = new Modal(this.$refs.modal);
    },
  };
</script>

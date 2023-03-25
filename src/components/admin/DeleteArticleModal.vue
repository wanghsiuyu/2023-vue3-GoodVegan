<template>
  <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-white" id="exampleModalLabel">刪除貼文</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          確認刪除貼文 <span class="text-danger"> {{ article.title }}</span> ？（刪除後將無法恢復）
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="$emit('deleteArticle')">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from 'bootstrap/js/dist/modal';
  export default {
    props: ['article'],
    data() {
      return {
        deleteArticleModal: '',
      };
    },
    mounted() {
      this.deleteArticleModal = new Modal(this.$refs.modal);
    },
  };
</script>

<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-white" id="exampleModalLabel">刪除商品</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否刪除 <span class="text-danger">{{ tempProduct.title }}</span> 商品？（刪除後將無法恢復）
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['tempProduct', 'deleteProduct'],
  };
</script>

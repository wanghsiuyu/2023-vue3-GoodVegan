<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-white" id="staticBackdropLabel">刪除訂單</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否刪除
        <span class="text-danger">
          <span v-if="order.user">{{ order.user?.name }}</span>
          <span v-else>全部</span>
        </span>
        訂單？（刪除後將無法恢復）
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">取消</button>
        <button v-if="order.user" type="button" class="btn btn-danger" @click="$emit('deleteOrder', order)">確認刪除</button>
        <button v-else type="button" class="btn btn-danger" @click="$emit('deleteOrdersAll')">確認刪除</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['order'],
  };
</script>

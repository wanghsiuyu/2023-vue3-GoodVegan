import{M as w}from"./modal-a77d17a6.js";import{_ as C,o as i,b as c,d as e,t as r,g as u,K as h,L as x,e as $,i as b,F as v,r as D,j as f}from"./index-ef04eae2.js";import{A as T}from"./AdminPagination-8fbf6d65.js";import{T as p}from"./toast-1bc0252f.js";import"./component-functions-53916ee9.js";const V={props:["coupon","isNew"],data(){return{couponModal:"",tempCoupon:{},due_date:""}},watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=t},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mounted(){this.couponModal=new w(this.$refs.modal)}},L={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-dialog-centered"},A={class:"modal-content"},U={class:"modal-header bg-primary"},E={class:"modal-title text-white",id:"exampleModalLabel"},P=e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},I={class:"mb-3"},R=e("label",{for:"code",class:"form-label"},"優惠券名稱",-1),B={class:"mb-3"},O=e("label",{for:"code",class:"form-label"},"優惠碼",-1),F={class:"mb-3"},H=e("label",{for:"percent",class:"form-label"},"折扣百分比",-1),j={class:"mb-3"},z=e("label",{for:"date",class:"form-label"},"使用期限",-1),G={class:"mb-3 form-check"},K=e("label",{for:"is_enabled",class:"form-check-label"},"是否啟用",-1),q={class:"modal-footer"},J=e("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"},"取消",-1);function Q(t,o,a,g,s,d){return i(),c("div",L,[e("div",N,[e("div",A,[e("div",U,[e("h5",E,r(a.isNew?"新增":"編輯")+"優惠券",1),P]),e("div",S,[e("form",null,[e("div",I,[R,u(e("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":o[0]||(o[0]=n=>s.tempCoupon.title=n),placeholder:"請輸入優惠券名稱"},null,512),[[h,s.tempCoupon.title]])]),e("div",B,[O,u(e("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":o[1]||(o[1]=n=>s.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[h,s.tempCoupon.code]])]),e("div",F,[H,u(e("input",{type:"number",min:"1",max:"100",class:"form-control",id:"percent","onUpdate:modelValue":o[2]||(o[2]=n=>s.tempCoupon.percent=n),placeholder:"請輸入折扣百分比（數字）"},null,512),[[h,s.tempCoupon.percent,void 0,{number:!0}]])]),e("div",j,[z,u(e("input",{type:"date",class:"form-control",id:"date","onUpdate:modelValue":o[3]||(o[3]=n=>s.due_date=n),placeholder:"請輸入使用期限"},null,512),[[h,s.due_date]])]),e("div",G,[u(e("input",{type:"checkbox",class:"form-check-input",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>s.tempCoupon.is_enabled=n)},null,512),[[x,s.tempCoupon.is_enabled]]),K])])]),e("div",q,[J,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=n=>t.$emit("updateCoupon",s.tempCoupon))},"確認")])])])],512)}const W=C(V,[["render",Q]]),X={props:["coupon"],data(){return{deleteCouponModal:""}},mounted(){this.deleteCouponModal=new w(this.$refs.modal)}},Y={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-dialog-centered"},ee={class:"modal-content"},oe=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"刪除優惠券"),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),te={class:"modal-body"},se={class:"text-danger"},ne={class:"modal-footer"},le=e("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"},"取消",-1);function ae(t,o,a,g,s,d){return i(),c("div",Y,[e("div",Z,[e("div",ee,[oe,e("div",te,[$(" 確認刪除優惠券 "),e("span",se,r(a.coupon.title),1),$(" ？（刪除後將無法恢復） ")]),e("div",ne,[le,e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=n=>t.$emit("deleteCoupon"))},"確認刪除")])])])],512)}const de=C(X,[["render",ae]]),{VITE_URL:m,VITE_PATH:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/2023-vue3-GoodVegan/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},ie={data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!0,page:{}}},components:{CouponModal:W,DeleteCouponModal:de,AdminPagination:T},methods:{checkLogin(){this.$http.post(`${m}/api/user/check`).then(()=>{this.getCoupons()}).catch(t=>{p.fire({icon:"error",title:t.response.data.message,width:250}),this.$router.push("/login")})},openModal(t,o){t==="create"?(this.tempCoupon={is_enabled:0,due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.modal.couponModal.show()):t==="edit"?(this.tempCoupon={...o},this.isNew=!1,this.$refs.modal.couponModal.show()):t==="delete"&&(this.tempCoupon={...o},this.$refs.deleteModal.deleteCouponModal.show())},updateCoupon(){let t="post",o=`${m}/api/${_}/admin/coupon`;this.isNew||(t="put",o=`${m}/api/${_}/admin/coupon/${this.tempCoupon.id}`),this.$http[t](o,{data:this.tempCoupon}).then(a=>{this.$refs.modal.couponModal.hide(),p.fire({icon:"success",title:a.data.message,width:250}),this.getCoupons()}).catch(a=>{p.fire({icon:"error",title:a.response.data.message,width:250})})},deleteCoupon(){this.$http.delete(`${m}/api/${_}/admin/coupon/${this.tempCoupon.id}`).then(t=>{this.$refs.deleteModal.deleteCouponModal.hide(),p.fire({icon:"success",title:t.data.message,width:250}),this.getCoupons()}).catch(t=>{p.fire({icon:"error",title:t.response.data.message,width:250})})},getCoupons(t=1){this.$http.get(`${m}/api/${_}/admin/coupons?page=${t}`).then(o=>{this.coupons=o.data.coupons,this.page=o.data.pagination}).catch(o=>{p.fire({icon:"error",title:o.response.data.message,width:250})})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkLogin()}},ce={class:"container mt-20"},pe={class:"text-end m-5"},re={class:"row"},ue={class:"col-12"},me={class:"table table-hover"},he=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"優惠券名稱"),e("th",{scope:"col"},"優惠碼"),e("th",{scope:"col"},"折扣百分比"),e("th",{scope:"col"},"到期日"),e("th",{scope:"col"},"是否啟用"),e("th",{scope:"col"},"操作")])],-1),_e={key:0,class:"text-success"},be={key:1,class:"text-danger"},fe=["onClick"],Ce=["onClick"];function ge(t,o,a,g,s,d){const n=b("CouponModal"),M=b("DeleteCouponModal"),y=b("AdminPagination");return i(),c(v,null,[e("div",ce,[e("div",pe,[e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=l=>d.openModal("create"))},"新增優惠券")]),e("div",re,[e("div",ue,[e("table",me,[he,e("tbody",null,[(i(!0),c(v,null,D(s.coupons,l=>(i(),c("tr",{key:l.id},[e("td",null,r(l.title),1),e("td",null,r(l.code),1),e("td",null,r(l.percent)+"%",1),e("td",null,r(new Date(l.due_date*1e3).toLocaleDateString()),1),e("td",null,[l.is_enabled?(i(),c("span",_e,"啟用")):(i(),c("span",be,"未啟用"))]),e("td",null,[e("button",{class:"btn btn-sm btn-outline-primary me-1",onClick:k=>d.openModal("edit",l)},"編輯",8,fe),e("button",{class:"btn btn-sm btn-outline-danger",onClick:k=>d.openModal("delete",l)},"刪除",8,Ce)])]))),128))])])])])]),f(n,{ref:"modal",coupon:s.tempCoupon,onUpdateCoupon:d.updateCoupon,isNew:s.isNew},null,8,["coupon","onUpdateCoupon","isNew"]),f(M,{ref:"deleteModal",coupon:s.tempCoupon,onDeleteCoupon:d.deleteCoupon},null,8,["coupon","onDeleteCoupon"]),f(y,{pages:s.page,onChangePage:d.getCoupons},null,8,["pages","onChangePage"])],64)}const ke=C(ie,[["render",ge]]);export{ke as default};

import{_ as T,R as k,r as b,o as n,c as i,d,b as t,w as v,u as c,F as a,t as u,A as L,B as x,f as h}from"./index-56a23cf2.js";const{VITE_URL:_,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{isLoading:!1,loadingStatus:"",product:{},productQty:1,selectImg:""}},components:{RouterLink:k},methods:{loading(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},500)},getProduct(){this.loading();const{id:l}=this.$route.params;this.$http.get(`${_}/api/${p}/product/${l}`).then(o=>{this.product=o.data.product}).catch(o=>{alert(o.response.data.message)})},addToCart(l,o=1){const m={product_id:l,qty:o};this.loadingStatus=l,this.$http.post(`${_}/api/${p}/cart`,{data:m}).then(r=>{this.loadingStatus="",alert(r.data.message),this.getCart()}).catch(r=>{alert(r.response.data.message)})},getCart(){this.$http.get(`${_}/api/${p}/cart`).then(l=>{this.cartsTotal=l.data.data,this.shipping=parseInt(this.cartsTotal.total>=500?0:100)}).catch(l=>{alert(l.response.data.message)})}},mounted(){this.getProduct(),this.productQty=1,this.selectImg=""}},w={class:"container",style:{"margin-top":"126px"}},I={"aria-label":"breadcrumb"},S={class:"breadcrumb mb-5"},C={class:"breadcrumb-item"},R={class:"breadcrumb-item"},E={class:"breadcrumb-item active","aria-current":"page"},D={class:"row justify-content-center my-4"},P={class:"col-5"},U={class:"mb-5"},N=["src","alt"],Q=["src","alt"],A=["src","alt","onClick"],B={class:"col-4"},F={class:"fs-3 mt-3"},H={class:"d-flex mb-4"},M={class:"fs-4 text-bold green mb-1"},O={class:"mb-4"},j={class:"text-secondary"},q=t("p",{class:"d-flex mb-4"},[t("span",{class:"material-icons me-1"}," discount "),h("單筆訂單滿 NT$500 免運")],-1),z=["disabled"],G=["value"],J=["disabled"],K={class:"col-9"},W=t("p",{class:"fs-6 mb-0 green"},"商品介紹",-1),X=t("p",{class:"fs-6 mb-0 green"},"內容物",-1),Y=t("p",{class:"fs-6 mb-0 green"},"產地",-1),Z=t("p",{class:"fs-6 mb-0 green"},"保存期限",-1),$=t("p",null,[t("small",null,"為保持食物最佳口感及鮮度，請於 2 小時內食用完畢，隔餐勿食。")],-1),tt=t("p",{class:"fs-6 mb-0 green"},"注意事項",-1),st=t("ol",null,[t("li",null,[t("small",null,"本店商品皆為新鮮現作，保存期限短，如您收到商品有瑕疵，請務必立即反應讓我們為您處理！")]),t("li",null,[t("small",null,"我們提供外送的地區是台南市東區、中西區、永康區、安平區、南區、北區、仁德區、安南區，運費是 100 元。")])],-1);function et(l,o,m,r,s,f){const y=b("VueLoading"),g=b("RouterLink");return n(),i(a,null,[d(y,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=e=>s.isLoading=e)},null,8,["active"]),t("div",w,[t("nav",I,[t("ol",S,[t("li",C,[d(g,{to:"/",class:"green"},{default:v(()=>[h("首頁")]),_:1})]),t("li",R,[d(g,{to:"/products",class:"green"},{default:v(()=>[h("線上訂餐")]),_:1})]),t("li",E,c(s.product.title),1)])]),t("div",D,[t("div",P,[t("div",U,[s.selectImg?(n(),i("img",{key:1,src:s.selectImg,alt:s.product.title,class:"img-cover w-100 mb-2",height:"400"},null,8,Q)):(n(),i("img",{key:0,src:s.product.imageUrl,alt:s.product.title,class:"img-cover w-100 mb-2",height:"400"},null,8,N)),(n(!0),i(a,null,u(s.product.imagesUrl,e=>(n(),i("img",{key:e,src:e,alt:s.product.title,width:"70",height:"70",class:"img-cover me-2",onClick:ot=>s.selectImg=e,style:{cursor:"pointer"}},null,8,A))),128))])]),t("div",B,[t("h2",F,c(s.product.title),1),t("div",H,[(n(!0),i(a,null,u(s.product.checkboxFeatures,e=>(n(),i("span",{key:e,class:"badge me-1 green bg-light-green"},c(e),1))),128))]),t("p",M,"NT$"+c(s.product.price),1),t("p",O,[t("small",j,[t("del",null,"NT$"+c(s.product.origin_price),1)])]),q,L(t("select",{class:"form-select w-50 mb-4","onUpdate:modelValue":o[1]||(o[1]=e=>s.productQty=e),disabled:s.loadingStatus===s.product.id},[(n(),i(a,null,u(20,e=>t("option",{key:e+1234,value:e},c(e),9,G)),64))],8,z),[[x,s.productQty]]),t("button",{type:"button",class:"btn btn-secondary w-100",disabled:s.loadingStatus===s.product.id,onClick:o[2]||(o[2]=e=>f.addToCart(s.product.id,s.productQty))},"加入購物車",8,J)]),t("div",K,[W,t("p",null,[t("small",null,c(s.product.description),1)]),X,t("p",null,[t("small",null,c(s.product.content),1)]),Y,t("p",null,[t("small",null,c(s.product.location),1)]),Z,$,tt,st])])])],64)}const ct=T(V,[["render",et]]);export{ct as default};
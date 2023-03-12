import{_ as S,R as T,u as m,v as u,r as v,o as t,c as e,d as b,b as s,w as g,F as d,t as r,e as $,f as p,x as i,y as c,z as C,A as L}from"./index-2aec0e18.js";import{p as k,l as f,c as N}from"./cartsStore-b40feee4.js";const V={data(){return{categoriesTabs:[["超飽足果昔盆","bowl"],["輕食冷盤","salad"],["湯品","soup"],["裸食甜點","dessert"],["果昔飲品","juice"]]}},components:{RouterLink:T},methods:{...m(k,["getProducts"]),...m(f,["loading"]),...m(N,["addToCart"])},computed:{...u(k,["products"]),...u(f,["isLoading","loadingStatus"])},mounted(){this.getProducts(),this.loading()}},w=l=>(C("data-v-202b4b25"),l=l(),L(),l),j=$('<section class="mb-5 banner" style="height:380px;" data-v-202b4b25><div class="container" data-v-202b4b25><div class="row justify-content-center" data-v-202b4b25><div class="col-sm-9 col-md-7 col-lg-5" data-v-202b4b25><h1 class="banner-plan fs-3 fs-lg-2" data-v-202b4b25>線上訂餐</h1></div></div></div></section>',1),F={class:"container"},I={"aria-label":"breadcrumb"},P={class:"breadcrumb mb-5"},R={class:"breadcrumb-item"},B=w(()=>s("li",{class:"breadcrumb-item active","aria-current":"page"},"線上訂餐",-1)),U={class:"row justify-content-center mb-5"},A={class:"col-12"},z={class:"nav sticky-top bg-light mb-6 nav-tab-top",id:"myTab",role:"tablist"},D=w(()=>s("li",{class:"nav-item",role:"presentation"},[s("a",{class:"nav-link active text-dark px-1 mx-2",id:"all-tab","data-bs-toggle":"tab","data-bs-target":"#all",type:"button",role:"tab","aria-controls":"all","aria-selected":"true"}," 全部商品 ")],-1)),E=["id","data-bs-target"],q={class:"tab-content",id:"myTabContent"},G={class:"tab-pane fade show active",id:"all",role:"tabpanel","aria-labelledby":"all-tab"},H={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5"},J={key:0,class:"col"},K={class:"position-relative hover-show-btn"},M={class:"hover-img-mask"},O=["src","alt"],Q=["disabled","onClick"],W={key:0,class:"fas fa-spinner fa-pulse"},X={key:1},Y={class:"mb-2 mb-lg-3"},Z={key:0,class:"badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2"},ss={key:1,class:"badge fs-6 px-2 py-1 me-1 me-lg-2",style:{color:"#2d9449","background-color":"#ecf8f4"}},ts={key:2,class:"badge fs-6 px-2 py-1 me-1 me-lg-2",style:{color:"#817447","background-color":"#f8efec"}},es={key:3,class:"badge fs-6 px-2 py-1",style:{color:"#814747","background-color":"#f8ecec"}},os={class:"fs-5 fs-lg-4 text-dark mb-2 mb-lg-3"},as={class:"text-primary mb-3 mb-lg-4 d-flex align-items-center"},ls={class:"fs-6 text-gray-dark ms-2"},is=["id","aria-labelledby"],ns={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5"},cs={key:0,class:"col"},ds={class:"position-relative hover-show-btn"},rs={class:"hover-img-mask"},bs=["src","alt"],_s=["disabled","onClick"],ms={key:0,class:"fas fa-spinner fa-pulse"},gs={key:1},ps={class:"mb-2 mb-lg-3"},hs={key:0,class:"badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2"},ys={key:1,class:"badge fs-6 px-2 py-1 me-1 me-lg-2",style:{color:"#2d9449","background-color":"#ecf8f4"}},us={key:2,class:"badge fs-6 px-2 py-1 me-1 me-lg-2",style:{color:"#817447","background-color":"#f8efec"}},vs={key:3,class:"badge fs-6 px-2 py-1",style:{color:"#814747","background-color":"#f8ecec"}},ks={class:"fs-5 fs-lg-4 text-dark mb-2 mb-lg-3"},fs={class:"text-primary mb-3 mb-lg-4 d-flex align-items-center"},ws={class:"fs-6 text-gray-dark ms-2"};function xs(l,h,Ss,Ts,y,$s){const x=v("VueLoading"),_=v("RouterLink");return t(),e(d,null,[b(x,{active:l.isLoading,"onUpdate:active":h[0]||(h[0]=o=>l.isLoading=o)},null,8,["active"]),j,s("div",F,[s("nav",I,[s("ol",P,[s("li",R,[b(_,{to:"/",class:"green"},{default:g(()=>[p("首頁")]),_:1})]),B])]),s("div",U,[s("div",A,[s("ul",z,[D,(t(!0),e(d,null,r(y.categoriesTabs,o=>(t(),e("li",{class:"nav-item",role:"presentation",key:o},[s("a",{class:"nav-link text-dark px-1 mx-2",id:`${o[1]}-tab`,"data-bs-toggle":"tab","data-bs-target":`#${o[1]}`,href:"#",role:"tab","aria-controls":"bowl","aria-selected":"false"},i(o[0]),9,E)]))),128))]),s("div",q,[s("div",G,[s("div",H,[(t(!0),e(d,null,r(l.products,o=>(t(),e(d,{key:o.id},[l.products?(t(),e("div",J,[s("div",K,[s("div",M,[s("img",{src:o.imageUrl,alt:o.title,class:"w-100 d-block rounded-3 object-fit-cover mb-3",height:"240"},null,8,O),s("button",{type:"button",class:"add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5",disabled:l.loadingStatus===o.id,onClick:a=>l.addToCart(o.id)},[l.loadingStatus===o.id?(t(),e("i",W)):(t(),e("span",X,"加入購物車"))],8,Q)])]),b(_,{to:`/product/${o.id}`},{default:g(()=>[s("h5",Y,[(t(!0),e(d,null,r(o.checkboxFeatures,a=>(t(),e("span",{key:a},[a==="純素"?(t(),e("span",Z,i(a),1)):c("",!0),a==="有機"?(t(),e("span",ss,i(a),1)):c("",!0),a==="無麩質"?(t(),e("span",ts,i(a),1)):c("",!0),a==="辣"?(t(),e("span",es,i(a),1)):c("",!0)]))),128))]),s("h4",os,i(o.title),1),s("h5",as,[p(" NT$"+i(o.price)+" ",1),s("span",ls,[s("del",null,"NT$"+i(o.origin_price),1)])])]),_:2},1032,["to"])])):c("",!0)],64))),128))])]),(t(!0),e(d,null,r(y.categoriesTabs,o=>(t(),e("div",{key:o,class:"tab-pane fade",id:o[1],role:"tabpanel","aria-labelledby":`${o[1]}-tab`},[s("div",ns,[(t(!0),e(d,null,r(l.products,a=>(t(),e(d,{key:a.id},[a.selectCategories===o[0]?(t(),e("div",cs,[s("div",ds,[s("div",rs,[s("img",{src:a.imageUrl,alt:a.title,class:"w-100 d-block rounded-3 object-fit-cover mb-3",height:"240"},null,8,bs),s("button",{type:"button",class:"add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5",disabled:l.loadingStatus===a.id,onClick:n=>l.addToCart(a.id)},[l.loadingStatus===a.id?(t(),e("i",ms)):(t(),e("span",gs,"加入購物車"))],8,_s)])]),b(_,{to:`/product/${a.id}`},{default:g(()=>[s("h5",ps,[(t(!0),e(d,null,r(a.checkboxFeatures,n=>(t(),e("span",{key:n},[n==="純素"?(t(),e("span",hs,i(n),1)):c("",!0),n==="有機"?(t(),e("span",ys,i(n),1)):c("",!0),n==="無麩質"?(t(),e("span",us,i(n),1)):c("",!0),n==="辣"?(t(),e("span",vs,i(n),1)):c("",!0)]))),128))]),s("h4",ks,i(a.title),1),s("h5",fs,[p(" NT$"+i(a.price)+" ",1),s("span",ws,[s("del",null,"NT$"+i(a.origin_price),1)])])]),_:2},1032,["to"])])):c("",!0)],64))),128))])],8,is))),128))])])])])],64)}const Ns=S(V,[["render",xs],["__scopeId","data-v-202b4b25"]]);export{Ns as default};
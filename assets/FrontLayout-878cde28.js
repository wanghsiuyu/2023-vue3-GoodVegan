import{c as dt,m as F,a as T,_ as H,o as f,b as h,d as t,t as m,F as N,r as P,n as _t,w as k,e as mt,v as ft,f as u,R as ht,g as ut,h as A,i,j as r,k as Q,l as M}from"./index-ee355782.js";import{c as $}from"./cartsStore-538ada13.js";import{l as gt}from"./loadingStore-27aa1f7b.js";import{r as bt,a as pt,b as vt,c as wt,d as yt,e as kt,f as $t,g as Et}from"./component-functions-09fd856b.js";import{_ as xt,a as Ct}from"./empty-cart-34a81ab2.js";import{_ as K}from"./logo2-235e6bbc.js";import"./toast-eae7d92b.js";var S={},At={get exports(){return S},set exports(e){S=e}};/*!
  * Bootstrap offcanvas.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,l){(function(p,y){e.exports=y(bt(),pt(),vt(),wt(),yt(),kt(),$t(),Et())})(dt,function(p,y,E,v,o,a,d,x){const w=c=>c&&typeof c=="object"&&"default"in c?c:{default:c},O=w(y),_=w(E),Y=w(v),C=w(o),G=w(a),U=w(d),J="offcanvas",g=".bs.offcanvas",D=".data-api",Z=`load${g}${D}`,X="Escape",V="show",L="showing",R="hiding",tt="offcanvas-backdrop",I=".offcanvas.show",et=`show${g}`,st=`shown${g}`,at=`hide${g}`,B=`hidePrevented${g}`,j=`hidden${g}`,ot=`resize${g}`,nt=`click${g}${D}`,it=`keydown.dismiss${g}`,lt='[data-bs-toggle="offcanvas"]',ct={backdrop:!0,keyboard:!0,scroll:!1},rt={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class b extends Y.default{constructor(s,n){super(s,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ct}static get DefaultType(){return rt}static get NAME(){return J}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){if(this._isShown||_.default.trigger(this._element,et,{relatedTarget:s}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new O.default().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(L);const q=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(V),this._element.classList.remove(L),_.default.trigger(this._element,st,{relatedTarget:s})};this._queueCallback(q,this._element,!0)}hide(){if(!this._isShown||_.default.trigger(this._element,at).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(R),this._backdrop.hide();const n=()=>{this._element.classList.remove(V,R),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new O.default().reset(),_.default.trigger(this._element,j)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const s=()=>{if(this._config.backdrop==="static"){_.default.trigger(this._element,B);return}this.hide()},n=Boolean(this._config.backdrop);return new G.default({className:tt,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?s:null})}_initializeFocusTrap(){return new U.default({trapElement:this._element})}_addEventListeners(){_.default.on(this._element,it,s=>{if(s.key===X){if(!this._config.keyboard){_.default.trigger(this._element,B);return}this.hide()}})}static jQueryInterface(s){return this.each(function(){const n=b.getOrCreateInstance(this,s);if(typeof s=="string"){if(n[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);n[s](this)}})}}return _.default.on(document,nt,lt,function(c){const s=p.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&c.preventDefault(),p.isDisabled(this))return;_.default.one(s,j,()=>{p.isVisible(this)&&this.focus()});const n=C.default.findOne(I);n&&n!==s&&b.getInstance(n).hide(),b.getOrCreateInstance(s).toggle(this)}),_.default.on(window,Z,()=>{for(const c of C.default.find(I))b.getOrCreateInstance(c).show()}),_.default.on(window,ot,()=>{for(const c of C.default.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(c).position!=="fixed"&&b.getOrCreateInstance(c).hide()}),x.enableDismissTrigger(b),p.defineJQueryPlugin(b),b})})(At);const Tt=S,Nt={data(){return{bsOffcanvas:""}},components:{},methods:{...F($,["getCart","removeCart","removeCartsAll","setCartQty"]),goProductsView(){this.bsOffcanvas.hide(),this.$router.push("/products")},goOrderView(){this.bsOffcanvas.hide(),this.$router.push("/order/info")}},computed:{...T($,["cartsTotal","shipping","cartsTotalNum"]),...T(gt,["loadingStatus"])},mounted(){this.bsOffcanvas=new Tt(this.$refs.offcanvasRight)}},St={class:"offcanvas offcanvas-end","data-bs-scroll":"true",tabindex:"-1",id:"offcanvasRight",ref:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},Ot={class:"offcanvas-header"},Dt={id:"offcanvasRightLabel"},Vt=t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),Lt={class:"offcanvas-body pt-0"},Rt={key:0},It={class:"table align-middle",style:{"font-size":"14px"}},Bt=t("tr",{class:"border-bottom"},null,-1),jt={class:"d-flex align-items-center justify-content-between gap-5 py-4 px-0"},qt={class:"d-flex align-items-center"},Pt=["onClick"],Qt=t("img",{src:Ct,alt:"delete"},null,-1),Ft=[Qt],Ht=["src"],Mt={class:"d-flex align-items-center justify-content-between w-75"},Kt={class:"d-flex flex-column"},zt={class:"mb-1"},Wt={class:"mb-1"},Yt={class:"mb-0 w-75"},Gt=["onUpdate:modelValue","onChange","disabled"],Ut=["value"],Jt={class:"mb-0 text-end"},Zt={class:"d-flex justify-content-between"},Xt=t("p",{class:"fs-6 mb-2"},"小計",-1),te={class:"fs-6 mb-2 fw-bold"},ee={class:"d-flex justify-content-between"},se={class:"fs-6 mb-2"},ae={key:0,class:"text-danger"},oe={key:1,class:"text-danger"},ne={class:"fs-6 mb-2 fw-bold"},ie={class:"d-flex justify-content-between mb-2"},le=t("p",{class:"fs-6 mb-2"},"總計",-1),ce={class:"fs-6 mb-2 fw-bold"},re={key:1,class:"text-center"},de=t("img",{src:xt,alt:"empty-cart",class:"mb-6",width:"80",height:"80"},null,-1),_e=t("h3",{class:"fs-5 mb-6"},"您的購物車目前是空的喔",-1);function me(e,l,p,y,E,v){var o;return f(),h("div",St,[t("div",Ot,[t("h5",Dt,"購物車 ("+m(e.cartsTotalNum)+")",1),Vt]),t("div",Lt,[(o=e.cartsTotal.carts)!=null&&o.length?(f(),h("div",Rt,[t("table",It,[t("tbody",null,[Bt,(f(!0),h(N,null,P(e.cartsTotal.carts,a=>(f(),h("tr",{key:a.id},[t("td",jt,[t("div",qt,[t("a",{role:"button",class:_t(["btn p-0 me-3",{disabled:e.loadingStatus===a.id}]),onClick:k(d=>e.removeCart(a.id),["prevent"]),style:{"border-color":"transparent"}},Ft,10,Pt),t("img",{src:a.product.imageUrl,class:"object-fit-cover flex-shrink-0",width:"80",height:"80",alt:"cart.product.title"},null,8,Ht)]),t("div",Mt,[t("div",Kt,[t("p",zt,m(a.product.title),1),t("p",Wt,"NT$"+m(a.product.price)+" / "+m(a.product.unit),1),t("div",Yt,[mt(t("select",{"onUpdate:modelValue":d=>a.qty=d,class:"form-select form-select-sm",onChange:d=>e.setCartQty(a),disabled:e.loadingStatus===a.id},[(f(),h(N,null,P(20,d=>t("option",{key:d+1234,value:d},m(d),9,Ut)),64))],40,Gt),[[ft,a.qty]])])]),t("p",Jt,"NT$"+m(a.total),1)])])]))),128))])]),t("button",{type:"button",class:"btn btn-sm btn-outline-primary mb-3",onClick:l[0]||(l[0]=(...a)=>e.removeCartsAll&&e.removeCartsAll(...a))},"清空購物車"),t("div",Zt,[Xt,t("p",te,"NT$"+m(e.cartsTotal.total),1)]),t("div",ee,[t("p",se,[u(" 運費 "),e.cartsTotal.total<500?(f(),h("small",ae,"(消費滿 $500 可享免運優惠)")):(f(),h("small",oe,"(恭禧您已達免運門檻！)"))]),t("p",ne,"NT$"+m(e.shipping),1)]),t("div",ie,[le,t("p",ce,"NT$"+m(e.cartsTotal.final_total+e.shipping),1)]),t("a",{href:"#",class:"btn btn-primary w-100 mb-2",onClick:l[1]||(l[1]=k(a=>v.goOrderView(),["prevent"]))},"訂單結帳")])):(f(),h("div",re,[de,_e,t("a",{href:"#",class:"btn btn-primary fs-lg-5 px-5 py-3 px-lg-6",onClick:l[2]||(l[2]=k(a=>v.goProductsView(),["prevent"]))},"現在就去逛逛")]))])],512)}const fe=H(Nt,[["render",me]]),z="/vue3-QA/assets/cart-56294020.svg",W="/vue3-QA/assets/member-08588000.svg",he="/vue3-QA/assets/menu-b4cacd3d.svg",ue="/vue3-QA/assets/instagram-cd707bc1.svg",ge="/vue3-QA/assets/FB-8296d5b2.svg",be="/vue3-QA/assets/youtube-9bfa7f5e.svg",pe="/vue3-QA/assets/phone-c23e1626.svg",ve="/vue3-QA/assets/mail-52bf0702.svg",we="/vue3-QA/assets/address-0e44b59d.svg";const ye={data(){return{}},components:{RouterLink:ht,RouterView:ut,CartOffcanvas:fe},methods:{...F($,["getCart"]),toggleOffcanvas(){this.$refs.offcanvas.bsOffcanvas.toggle()}},computed:{...T($,["cartsTotalNum"])},mounted(){this.getCart()}},ke={class:"navbar fixed-top navbar-expand-lg navbar-light bg-primary-light py-2 py-lg-3"},$e={class:"container"},Ee=t("img",{src:K,width:"113",height:"32",alt:"logo",class:"d-inline-block navbar-logo"},null,-1),xe={class:"d-flex align-items-center"},Ce={class:"d-lg-none"},Ae=t("img",{src:z,alt:"cart",width:"40",height:"40"},null,-1),Te={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white",style:{top:"6px"}},Ne=t("img",{src:W,alt:"member",width:"40",height:"40"},null,-1),Se=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[t("img",{src:he,alt:"menu",width:"40",height:"40"})],-1),Oe={class:"collapse navbar-collapse d-lg-flex justify-content-lg-center",id:"navbarText"},De={class:"navbar-nav mt-2 mt-lg-0"},Ve={class:"nav-item mb-4 mb-lg-0"},Le={class:"nav-item mb-4 mb-lg-0"},Re={class:"nav-item mb-4 mb-lg-0"},Ie={class:"nav-item mb-4 mb-lg-0"},Be={class:"d-none d-lg-block"},je=t("img",{src:z,alt:"cart",width:"40",height:"40"},null,-1),qe={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white",style:{top:"6px"}},Pe=t("img",{src:W,alt:"member",width:"40",height:"40"},null,-1),Qe={class:"bg-white"},Fe={class:"container py-8"},He={class:"d-lg-flex justify-content-between align-items-center pb-6 pb-lg-4 border-bottom"},Me=M('<div class="d-flex flex-lg-column justify-content-between align-items-center align-items-lg-start mb-8 mb-lg-0"><a href="#"><img src="'+K+'" width="183" height="52" alt="logo" class="mb-lg-6"></a><ul class="nav"><li class="nav-item"><a href="#" class="me-4"><img src="'+ue+'" alt="instagram" width="32" class="text-dark"></a></li><li class="nav-item"><a href="#" class="me-4"><img src="'+ge+'" alt="FB" width="32"></a></li><li class="nav-item"><a href="#"><img src="'+be+'" alt="youtube" width="32"></a></li></ul></div>',1),Ke={class:"nav mb-2"},ze={class:"nav-item mb-6 mb-lg-0"},We={class:"nav-item mb-6 mb-lg-0"},Ye={class:"nav-item mb-6 mb-lg-0"},Ge={class:"nav-item mb-6 mb-lg-0"},Ue={class:"nav-item mb-6 mb-lg-0"},Je=M('<ul class="nav flex-column gap-3 gap-lg-4"><li class="nav-item"><a href="tel:+88662345678"><img src="'+pe+'" alt="phone" width="24" class="me-3">06-2345678 </a></li><li class="nav-item"><a href="mailto:goodvegan@email.com"><img src="'+ve+'" alt="mail" width="24" class="me-3">goodvegan@email.com </a></li><li class="nav-item"><a href="#"><img src="'+we+'" alt="address" width="24" class="me-3">台南市東區樂活路 59 號 </a></li></ul>',1),Ze=t("div",{class:"d-lg-flex justify-content-between pt-6 pt-lg-4 text-gray"},[t("p",{class:"mb-2 mb-lg-0"},"Copyright © 2023 goodvegan.com | All Rights Reserved."),t("p",{class:"mb-0"},"本網站僅作為個人練習作品，無任何商業用途")],-1);function Xe(e,l,p,y,E,v){const o=A("RouterLink"),a=A("CartOffcanvas"),d=A("RouterView");return f(),h(N,null,[t("nav",ke,[t("div",$e,[i(o,{to:"/"},{default:r(()=>[Ee]),_:1}),t("div",xe,[t("div",Ce,[t("a",{role:"button",class:"navbar-brand position-relative",onClick:l[0]||(l[0]=k(x=>v.toggleOffcanvas(),["prevent"])),"aria-controls":"offcanvasRight"},[Ae,e.cartsTotalNum?(f(),h("span",Te,m(e.cartsTotalNum),1)):Q("",!0)]),i(o,{to:"/login",class:"navbar-brand"},{default:r(()=>[Ne]),_:1})]),Se]),t("div",Oe,[t("ul",De,[t("li",Ve,[i(o,{to:"/about",class:"nav-link pt-3 mx-5 fs-lg-5 d-inline-block"},{default:r(()=>[u("關於我們")]),_:1})]),t("li",Le,[i(o,{to:"/products",class:"nav-link fs-lg-5 pt-3 mx-5 d-inline-block"},{default:r(()=>[u("線上訂餐")]),_:1})]),t("li",Re,[i(o,{to:"/#qa",class:"nav-link fs-lg-5 pt-3 mx-5 d-inline-block","exact-active-class":"exact-active"},{default:r(()=>[u("常見問題")]),_:1})]),t("li",Ie,[i(o,{to:"/location",class:"nav-link fs-lg-5 pt-3 mx-5 d-inline-block"},{default:r(()=>[u("門市資訊")]),_:1})])])]),t("div",Be,[t("a",{role:"button",class:"navbar-brand position-relative",onClick:l[1]||(l[1]=k(x=>v.toggleOffcanvas(),["prevent"])),"aria-controls":"offcanvasRight"},[je,e.cartsTotalNum?(f(),h("span",qe,m(e.cartsTotalNum),1)):Q("",!0)]),i(o,{to:"/login",class:"navbar-brand"},{default:r(()=>[Pe]),_:1})])])]),i(a,{ref:"offcanvas"},null,512),t("main",null,[i(d)]),t("footer",Qe,[t("div",Fe,[t("div",He,[Me,t("ul",Ke,[t("li",ze,[i(o,{to:"/",class:"me-21 mx-lg-5 fs-lg-5 text-gray-dark d-inline-block","exact-active-class":"exact-active"},{default:r(()=>[u("首頁")]),_:1})]),t("li",We,[i(o,{to:"/about",class:"me-13 mx-lg-5 fs-lg-5 text-gray-dark d-inline-block","exact-active-class":"exact-active"},{default:r(()=>[u("關於我們")]),_:1})]),t("li",Ye,[i(o,{to:"/products",class:"fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block","exact-active-class":"exact-active"},{default:r(()=>[u("線上訂餐")]),_:1})]),t("li",Ge,[i(o,{to:"/#qa",class:"fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block","exact-active-class":"exact-active"},{default:r(()=>[u("常見問題")]),_:1})]),t("li",Ue,[i(o,{to:"/location",class:"fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block","exact-active-class":"exact-active"},{default:r(()=>[u("門市資訊")]),_:1})])]),Je]),Ze])])],64)}const cs=H(ye,[["render",Xe]]);export{cs as default};

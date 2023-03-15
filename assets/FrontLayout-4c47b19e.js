import{_ as h,R as p,a as f,m as x,b as y,r as n,o as i,c,d as t,e as s,w as e,F as k,f as g,t as r,g as d,h as l}from"./index-72b02649.js";import{c as m}from"./cartsStore-f5ff5db3.js";import{_}from"./logo2-235e6bbc.js";import"./loadingStore-610d53bc.js";import"./toast-9ba74706.js";const b="/vue3-QA/assets/cart-56294020.svg",v="/vue3-QA/assets/member-08588000.svg",w="/vue3-QA/assets/menu-b4cacd3d.svg",A="/vue3-QA/assets/instagram-cd707bc1.svg",N="/vue3-QA/assets/FB-8296d5b2.svg",T="/vue3-QA/assets/youtube-9bfa7f5e.svg",Q="/vue3-QA/assets/phone-c23e1626.svg",R="/vue3-QA/assets/mail-52bf0702.svg",V="/vue3-QA/assets/address-0e44b59d.svg";const C={components:{RouterLink:p,RouterView:f},methods:{...x(m,["getCart"])},computed:{...y(m,["cartsTotalNum"])},mounted(){this.getCart()}},F={class:"navbar fixed-top navbar-expand-lg navbar-light bg-primary-light py-2 py-lg-3"},B={class:"container"},L=t("img",{src:_,width:"113",height:"32",alt:"logo",class:"d-inline-block navbar-logo"},null,-1),j={class:"d-flex align-items-center"},S={class:"d-lg-none"},$=t("img",{src:b,alt:"cart",width:"40",height:"40"},null,-1),q={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white",style:{top:"6px"}},D=t("img",{src:v,alt:"member",width:"40",height:"40"},null,-1),E=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[t("img",{src:w,alt:"menu",width:"40",height:"40"})],-1),z={class:"collapse navbar-collapse d-lg-flex justify-content-lg-center",id:"navbarText"},G={class:"navbar-nav mt-2 mt-lg-0"},H={class:"nav-item mb-4 mb-lg-0"},I={class:"nav-item mb-4 mb-lg-0"},J={class:"nav-item mb-4 mb-lg-0"},K={class:"nav-item mb-4 mb-lg-0"},M={class:"d-none d-lg-block"},O=t("img",{src:b,alt:"cart",width:"40",height:"40"},null,-1),P={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white",style:{top:"6px"}},U=t("img",{src:v,alt:"member",width:"40",height:"40"},null,-1),W={class:"bg-white mt-20"},X={class:"container py-8"},Y={class:"d-lg-flex justify-content-between align-items-center pb-6 pb-lg-4 border-bottom"},Z=g('<div class="d-flex flex-lg-column justify-content-between align-items-center align-items-lg-start mb-8 mb-lg-0"><a href="#"><img src="'+_+'" width="183" height="52" alt="logo" class="mb-lg-6"></a><ul class="nav"><li class="nav-item"><a href="#" class="me-4"><img src="'+A+'" alt="instagram" width="32" class="text-dark"></a></li><li class="nav-item"><a href="#" class="me-4"><img src="'+N+'" alt="FB" width="32"></a></li><li class="nav-item"><a href="#"><img src="'+T+'" alt="youtube" width="32"></a></li></ul></div>',1),tt={class:"nav mb-2"},st={class:"nav-item mb-6 mb-lg-0"},at={class:"nav-item mb-6 mb-lg-0"},et={class:"nav-item mb-6 mb-lg-0"},lt={class:"nav-item mb-6 mb-lg-0"},ot={class:"nav-item mb-6 mb-lg-0"},it=g('<ul class="nav flex-column gap-3 gap-lg-4"><li class="nav-item"><a href="tel:+88662345678"><img src="'+Q+'" alt="phone" width="24" class="me-3">06-2345678 </a></li><li class="nav-item"><a href="mailto:goodvegan@email.com"><img src="'+R+'" alt="mail" width="24" class="me-3">goodvegan@email.com </a></li><li class="nav-item"><a href="#"><img src="'+V+'" alt="address" width="24" class="me-3">台南市東區樂活路 59 號 </a></li></ul>',1),ct=t("div",{class:"d-lg-flex justify-content-between pt-6 pt-lg-4 text-gray"},[t("p",{class:"mb-2 mb-lg-0"},"Copyright © 2023 goodvegan.com | All Rights Reserved."),t("p",{class:"mb-0"},"本網站僅作為個人練習作品，無任何商業用途")],-1);function nt(o,rt,dt,mt,gt,_t){const a=n("RouterLink"),u=n("RouterView");return i(),c(k,null,[t("nav",F,[t("div",B,[s(a,{to:"/"},{default:e(()=>[L]),_:1}),t("div",j,[t("div",S,[s(a,{to:"/order/info",class:"navbar-brand position-relative"},{default:e(()=>[$,o.cartsTotalNum?(i(),c("span",q,r(o.cartsTotalNum),1)):d("",!0)]),_:1}),s(a,{to:"/login",class:"navbar-brand"},{default:e(()=>[D]),_:1})]),E]),t("div",z,[t("ul",G,[t("li",H,[s(a,{to:"/about",class:"nav-link pt-3 mx-5 fs-lg-5 d-inline-block"},{default:e(()=>[l("關於我們")]),_:1})]),t("li",I,[s(a,{to:"/products",class:"nav-link fs-lg-5 pt-3 mx-5 d-inline-block"},{default:e(()=>[l("線上訂餐")]),_:1})]),t("li",J,[s(a,{to:"/#qa",class:"nav-link fs-lg-5 pt-3 mx-5 d-inline-block","exact-active-class":"exact-active"},{default:e(()=>[l("常見問題")]),_:1})]),t("li",K,[s(a,{to:"/location",class:"nav-link fs-lg-5 pt-3 mx-5 d-inline-block"},{default:e(()=>[l("門市資訊")]),_:1})])])]),t("div",M,[s(a,{to:"/order/info",class:"navbar-brand position-relative"},{default:e(()=>[O,o.cartsTotalNum?(i(),c("span",P,r(o.cartsTotalNum),1)):d("",!0)]),_:1}),s(a,{to:"/login",class:"navbar-brand"},{default:e(()=>[U]),_:1})])])]),t("main",null,[s(u)]),t("footer",W,[t("div",X,[t("div",Y,[Z,t("ul",tt,[t("li",st,[s(a,{to:"/",class:"me-21 mx-lg-5 fs-lg-5 text-gray-dark d-inline-block","exact-active-class":"exact-active"},{default:e(()=>[l("首頁")]),_:1})]),t("li",at,[s(a,{to:"/about",class:"me-13 mx-lg-5 fs-lg-5 text-gray-dark d-inline-block","exact-active-class":"exact-active"},{default:e(()=>[l("關於我們")]),_:1})]),t("li",et,[s(a,{to:"/products",class:"fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block","exact-active-class":"exact-active"},{default:e(()=>[l("線上訂餐")]),_:1})]),t("li",lt,[s(a,{to:"/#qa",class:"fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block","exact-active-class":"exact-active"},{default:e(()=>[l("常見問題")]),_:1})]),t("li",ot,[s(a,{to:"/location",class:"fs-lg-5 text-gray-dark me-13 mx-lg-5 d-inline-block","exact-active-class":"exact-active"},{default:e(()=>[l("門市資訊")]),_:1})])]),it]),ct])])],64)}const ft=h(C,[["render",nt]]);export{ft as default};

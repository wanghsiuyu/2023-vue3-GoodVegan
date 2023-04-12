import{_ as h,R as b,m as f,a as v,i as n,o as i,b as c,j as o,d as e,k as _,F as p,r as k,e as d,t as a,p as y,q as w}from"./index-ef04eae2.js";import{b as m}from"./blogsStore-0d2bae2a.js";import{A as L}from"./AdminPagination-8fbf6d65.js";import"./toast-1bc0252f.js";const A={components:{RouterLink:b,AdminPagination:L},methods:{...f(m,["getArticles"])},computed:{...v(m,["articles","isLoading","page"])},mounted(){this.getArticles()}},V=s=>(y("data-v-afee9b6f"),s=s(),w(),s),x={class:"container mt-20"},S={class:"py-4 py-lg-8"},$={"aria-label":"breadcrumb border"},B={class:"breadcrumb mb-5"},P={class:"breadcrumb-item"},C=V(()=>e("li",{class:"breadcrumb-item active","aria-current":"page"},"專欄文章",-1)),I={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-8 g-lg-10 mb-10"},R={class:"card rounded-0 border-0"},j={class:"mask"},N=["src","alt"],F={class:"card-body"},q={class:"card-text d-flex justify-content-between text-gray-dark"},D={class:"mb-2"},E={class:"mb-2"},T={class:"text-dark"},U={class:"card-title text-truncate"},z={class:"card-text line-clamp"};function G(s,r,H,J,K,M){const g=n("VueLoading"),l=n("RouterLink"),u=n("AdminPagination");return i(),c(p,null,[o(g,{active:s.isLoading,"onUpdate:active":r[0]||(r[0]=t=>s.isLoading=t)},null,8,["active"]),e("div",x,[e("div",S,[e("nav",$,[e("ol",B,[e("li",P,[o(l,{to:"/"},{default:_(()=>[d("首頁")]),_:1})]),C])]),e("div",I,[(i(!0),c(p,null,k(s.articles,t=>(i(),c("div",{key:t.id,class:"col"},[e("div",R,[e("div",j,[e("img",{src:t.image,class:"w-100 object-fit-cover rounded-0",alt:t.title,height:"350"},null,8,N)]),e("div",F,[e("div",q,[e("p",D,a(s.$filters.date(t.create_at)),1),e("p",E,[d(" by "),e("span",T,a(t.author),1)])]),e("h5",U,a(t.title),1),e("p",z,a(t.description),1),o(l,{to:`/blogs/${t.id}`,class:"stretched-link"},{default:_(()=>[d("閱讀更多 >")]),_:2},1032,["to"])])])]))),128))]),o(u,{pages:s.page,onChangePage:s.getArticles},null,8,["pages","onChangePage"])])])],64)}const Y=h(A,[["render",G],["__scopeId","data-v-afee9b6f"]]);export{Y as default};

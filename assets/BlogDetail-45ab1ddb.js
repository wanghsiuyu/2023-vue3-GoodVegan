import{_ as B,R,m as L,a as V,i as m,o as l,b as r,j as d,d as e,k as _,t as o,e as n,f as g,F as u,r as f,n as v,G as x,w as M,p as S,q as A}from"./index-ef04eae2.js";import{b as y}from"./blogsStore-0d2bae2a.js";import{T as j}from"./toast-1bc0252f.js";const{VITE_URL:E,VITE_PATH:C}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/2023-vue3-GoodVegan/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},D={data(){return{article:"",isLoading:!1,currentIndex:0,searchInput:"",filterBlogs:[],allTags:["純素飲食","初學者","素食主義","健康飲食","營養均衡","氣候變遷","綠色生活","環保","植物蛋白","高蛋白飲食","食譜"],filterTags:[],breadcrumbTag:"",noResultMessage:""}},components:{RouterLink:R},methods:{...L(y,["getArticles"]),getArticle(){const{id:i}=this.$route.params;this.isLoading=!0,this.$http.get(`${E}/api/${C}/article/${i}`).then(a=>{this.isLoading=!1,this.article=a.data.article,this.findIndex(),this.filterBlogs=[],this.filterTags=[],this.$refs.form.resetForm()}).catch(a=>{j.fire({icon:"error",title:a.response.data.message,width:250})})},findIndex(){this.currentIndex=this.articles.findIndex(i=>i.id===this.article.id)},searchBlogs(){this.filterBlogs=this.articles.filter(i=>i.title.match(this.searchInput)),this.$route.params.id="",this.noResultMessage="",this.filterBlogs.length||(this.noResultMessage="無相關搜尋結果！"),this.$refs.form.resetForm()},searchTag(i){this.filterTags=this.articles.filter(a=>a.tag.includes(i)),this.breadcrumbTag=i,this.$route.params.id="",this.noResultMessage="",this.$refs.form.resetForm()}},computed:{...V(y,["articles"])},watch:{"$route.params":{immediate:!0,handler(){this.$route.params.id&&(this.getArticle(),this.noResultMessage="")}},noResultMessage(){return this.noResultMessage}},mounted(){this.getArticles(),this.getArticle()}},c=i=>(S("data-v-ddb878fd"),i=i(),A(),i),F={class:"container mt-20"},U={class:"pt-4 pt-lg-8 pb-10 pb-lg-20"},H={"aria-label":"breadcrumb"},N={class:"breadcrumb mb-5 lh-lg"},P={class:"breadcrumb-item"},q={class:"breadcrumb-item"},G={key:0,class:"breadcrumb-item active","aria-current":"page"},O={key:1,class:"breadcrumb-item active","aria-current":"page"},z={key:2,class:"breadcrumb-item active d-flex align-items-center","aria-current":"page"},J=c(()=>e("span",{class:"material-icons fs-5"}," local_offer ",-1)),K={class:"row text-dark gy-8"},Q={key:0,class:"col-lg-8"},W={class:"h3"},X={class:"list-inline text-gray-dark my-3 d-flex align-items-center flex-wrap lh-lg"},Y={class:"list-inline-item"},Z={class:"d-flex align-items-center"},$=c(()=>e("span",{class:"material-icons fs-5"}," person ",-1)),ee={class:"list-inline-item"},se={class:"d-flex align-items-center"},te=c(()=>e("span",{class:"material-icons fs-5"}," today ",-1)),ie={class:"list-inline-item"},le={class:"d-flex align-items-center flex-wrap"},oe=c(()=>e("span",{class:"material-icons fs-6"}," local_offer ",-1)),re=["src","alt"],ne=["innerHTML"],ce=c(()=>e("hr",{class:"my-5 my-lg-10"},null,-1)),ae={class:"row justify-content-between"},de=c(()=>e("span",{class:"material-icons me-2"}," arrow_back_ios_new ",-1)),_e=c(()=>e("br",null,null,-1)),he={key:0,class:"col-6"},ue={class:"text-end"},me=c(()=>e("br",null,null,-1)),ge=c(()=>e("span",{class:"material-icons ms-2"}," arrow_forward_ios ",-1)),fe={key:1,class:"col-lg-8"},pe={class:"row row-cols-1 row-cols-md-2 gy-8 g-lg-10"},be={class:"card rounded-0 border-0"},ve=["src","alt"],xe={class:"card-body"},ye={class:"card-text d-flex justify-content-between text-gray-dark"},ke={class:"mb-2"},we={class:"mb-2"},Te={class:"text-dark"},Ie={class:"card-title text-truncate"},Be={class:"card-text line-clamp"},Re={key:2,class:"col-lg-8"},Le={class:"row row-cols-1 row-cols-md-2 gy-8 g-lg-10"},Ve={class:"card rounded-0 border-0"},Me=["src","alt"],Se={class:"card-body"},Ae={class:"card-text d-flex justify-content-between text-gray-dark"},je={class:"mb-2"},Ee={class:"mb-2"},Ce={class:"text-dark"},De={class:"card-title text-truncate"},Fe={class:"card-text line-clamp"},Ue={class:"col-lg-3 offset-lg-1"},He=c(()=>e("label",{for:"search",class:"form-label mb-2 mb-lg-4"},[e("h5",null,"搜尋")],-1)),Ne={class:"input-group mb-3"},Pe=["disabled"],qe=c(()=>e("span",{class:"material-icons"}," search ",-1)),Ge=[qe],Oe={class:"text-danger text-center"},ze=c(()=>e("h5",{class:"mb-2 mb-lg-4"},"Tags",-1)),Je={class:"d-flex flex-wrap align-items-center ps-2 ps-lg-0 mb-5 mb-lg-10"},Ke=["onClick"],Qe=c(()=>e("span",{class:"material-icons fs-5"}," local_offer ",-1)),We=c(()=>e("h5",{class:"mb-2 mb-lg-4"},"最新文章",-1)),Xe={class:"mb-2"};function Ye(i,a,Ze,$e,s,b){const k=m("VueLoading"),h=m("RouterLink"),w=m("v-field"),T=m("error-message"),I=m("v-form");return l(),r(u,null,[d(k,{active:s.isLoading,"onUpdate:active":a[0]||(a[0]=t=>s.isLoading=t)},null,8,["active"]),e("div",F,[e("div",U,[e("nav",H,[e("ol",N,[e("li",P,[d(h,{to:"/"},{default:_(()=>[n("首頁")]),_:1})]),e("li",q,[d(h,{to:"/blogs"},{default:_(()=>[n("專欄文章")]),_:1})]),!s.filterBlogs.length&&!s.filterTags.length?(l(),r("li",G,o(s.article.title),1)):s.filterBlogs.length?(l(),r("li",O,"搜尋結果")):s.filterTags.length?(l(),r("li",z,[J,n(o(s.breadcrumbTag),1)])):g("",!0)])]),e("div",K,[!s.filterBlogs.length&&!s.filterTags.length?(l(),r("div",Q,[e("article",null,[e("h1",W,o(s.article.title),1),e("ul",X,[e("li",Y,[e("div",Z,[$,n(o(s.article.author),1)])]),e("li",ee,[e("div",se,[te,n(o(i.$filters.date(s.article.create_at)),1)])]),e("li",ie,[e("div",le,[(l(!0),r(u,null,f(s.article.tag,t=>(l(),r("span",{key:t,class:"d-flex align-items-center me-1 flex-shrink-0"},[oe,n(o(t),1)]))),128))])])]),e("img",{src:s.article.image,alt:s.article.title,class:"img-fluid object-fit-cover mb-5"},null,8,re),e("div",{innerHTML:s.article.content},null,8,ne)]),ce,e("div",ae,[e("div",{class:v(["col-6",{"border-end":s.currentIndex!==0&&s.currentIndex!==i.articles.length-1}])},[i.articles[s.currentIndex-1]?(l(),x(h,{key:0,to:`/blogs/${i.articles[s.currentIndex-1].id}`,class:"d-flex align-items-center"},{default:_(()=>[de,e("div",null,[n(" 上一篇："),_e,n(" "+o(i.articles[s.currentIndex-1].title),1)])]),_:1},8,["to"])):g("",!0)],2),i.articles[s.currentIndex+1]?(l(),r("div",he,[d(h,{to:`/blogs/${i.articles[s.currentIndex+1].id}`,class:"d-flex align-items-center justify-content-end"},{default:_(()=>[e("div",ue,[n(" 下一篇："),me,n(" "+o(i.articles[s.currentIndex+1].title),1)]),ge]),_:1},8,["to"])])):g("",!0)])])):s.filterBlogs.length?(l(),r("div",fe,[e("div",pe,[(l(!0),r(u,null,f(s.filterBlogs,t=>(l(),r("div",{key:t.id,class:"col"},[e("div",be,[e("img",{src:t.image,class:"w-100 object-fit-cover rounded-0",alt:t.title,height:"250"},null,8,ve),e("div",xe,[e("div",ye,[e("p",ke,o(i.$filters.date(t.create_at)),1),e("p",we,[n(" by "),e("span",Te,o(t.author),1)])]),e("h5",Ie,o(t.title),1),e("p",Be,o(t.description),1),d(h,{to:`/blogs/${t.id}`,class:"stretched-link"},{default:_(()=>[n("閱讀更多 >")]),_:2},1032,["to"])])])]))),128))])])):s.filterTags.length?(l(),r("div",Re,[e("div",Le,[(l(!0),r(u,null,f(s.filterTags,t=>(l(),r("div",{key:t.id,class:"col"},[e("div",Ve,[e("img",{src:t.image,class:"w-100 object-fit-cover rounded-0",alt:t.title,height:"250"},null,8,Me),e("div",Se,[e("div",Ae,[e("p",je,o(i.$filters.date(t.create_at)),1),e("p",Ee,[n(" by "),e("span",Ce,o(t.author),1)])]),e("h5",De,o(t.title),1),e("p",Fe,o(t.description),1),d(h,{to:`/blogs/${t.id}`,class:"stretched-link"},{default:_(()=>[n("閱讀更多 >")]),_:2},1032,["to"])])])]))),128))])])):g("",!0),e("div",Ue,[d(I,{onSubmit:b.searchBlogs,ref:"form",class:"mb-5 mb-lg-10 position-relative"},{default:_(({errors:t})=>[He,e("div",Ne,[d(w,{name:"關鍵字",class:v([{"is-invalid":t.關鍵字},"form-control"]),rules:"required",id:"search",type:"text",modelValue:s.searchInput,"onUpdate:modelValue":a[1]||(a[1]=p=>s.searchInput=p),modelModifiers:{trim:!0},placeholder:"請輸入關鍵字","aria-label":"請輸入關鍵字"},null,8,["class","modelValue"]),e("button",{type:"submit",class:"btn btn-primary d-flex align-items-center",disabled:t.關鍵字},Ge,8,Pe),d(T,{name:"關鍵字",class:"invalid-feedback"})]),e("p",Oe,o(s.noResultMessage),1)]),_:1},8,["onSubmit"]),ze,e("div",Je,[(l(!0),r(u,null,f(s.allTags,t=>(l(),r("a",{key:t,href:"#",onClick:M(p=>b.searchTag(t),["prevent"]),class:"d-flex align-items-center me-2 mb-2 text-dark tag-hover"},[Qe,n(o(t),1)],8,Ke))),128))]),We,(l(!0),r(u,null,f(i.articles,(t,p)=>(l(),r(u,{key:t.id},[p<3?(l(),x(h,{key:0,to:`/blogs/${t.id}`},{default:_(()=>[e("p",Xe,o(t.title),1)]),_:2},1032,["to"])):g("",!0)],64))),128))])])])])],64)}const is=B(D,[["render",Ye],["__scopeId","data-v-ddb878fd"]]);export{is as default};

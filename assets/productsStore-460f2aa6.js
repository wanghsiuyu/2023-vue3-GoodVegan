import{H as o,I as r}from"./index-7b2cc301.js";import{l as i}from"./loadingStore-5db4dbb3.js";import{T as c}from"./toast-027fd91b.js";const e=i(),{VITE_URL:d,VITE_PATH:n}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/2023-vue3-GoodVegan/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h=o("productsStore",{state:()=>({products:[],perPage:8,currentPage:1,totalPages:1,displayedProducts:[]}),actions:{getProducts(s=1){e.isLoading=!0,r.get(`${d}/api/${n}/products/all`).then(t=>{e.isLoading=!1,this.products=t.data.products,this.updatePagination(s)}).catch(t=>{c.fire({icon:"error",title:t.response.data.message,width:250})})},updatePagination(s){this.totalPages=Math.ceil(this.products.length/this.perPage),this.currentPage=s;const t=(this.currentPage-1)*this.perPage,a=t+this.perPage;this.displayedProducts=this.products.slice(t,a)}}});export{h as p};
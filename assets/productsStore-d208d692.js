import{B as o,C as e}from"./index-81e4f8a2.js";import{l as a}from"./loadingStore-f8f0d968.js";const s=a(),{VITE_URL:r,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},d=o("productsStore",{state:()=>({products:[]}),getters:{},actions:{getProducts(){s.isLoading=!0,e.get(`${r}/api/${c}/products/all`).then(t=>{s.isLoading=!1,this.products=t.data.products}).catch(t=>{alert(t.response.data.message)})}}});export{d as p};
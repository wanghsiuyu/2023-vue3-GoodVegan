import{B as n,C as r}from"./index-9910186b.js";import{l as h}from"./loadingStore-b2465be2.js";import{T as e}from"./toast-098f7920.js";const i=h(),{VITE_URL:o,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},u=n("cartsStore",{state:()=>({cartsTotal:{},cartsTotalNum:0,shipping:0}),actions:{addToCart(t,a=1){const s={product_id:t,qty:a};i.loadingStatus=t,r.post(`${o}/api/${c}/cart`,{data:s}).then(d=>{i.loadingStatus="",e.fire({icon:"success",title:d.data.message,width:250}),this.getCart()}).catch(d=>{e.fire({icon:"error",title:d.response.data.message,width:250})})},getCart(){r.get(`${o}/api/${c}/cart`).then(t=>{this.cartsTotal=t.data.data,this.cartsTotalNum=this.cartsTotal.carts.reduce((a,s)=>a+s.qty,0),this.shipping=parseInt(this.cartsTotal.total>=500?0:100)}).catch(t=>{e.fire({icon:"error",title:t.response.data.message,width:250})})},removeCart(t){i.loadingStatus=t,r.delete(`${o}/api/${c}/cart/${t}`).then(a=>{i.loadingStatus="",e.fire({icon:"success",title:a.data.message,width:250}),this.getCart()}).catch(a=>{e.fire({icon:"error",title:a.response.data.message,width:250})})},removeCartsAll(){r.delete(`${o}/api/${c}/carts`).then(t=>{e.fire({icon:"success",title:t.data.message,width:250}),this.getCart()}).catch(t=>{e.fire({icon:"error",title:t.response.data.message,width:250})})},setCartQty(t){const a={product_id:t.product_id,qty:t.qty};i.loadingStatus=t.id,r.put(`${o}/api/${c}/cart/${t.id}`,{data:a}).then(s=>{i.loadingStatus="",e.fire({icon:"success",title:s.data.message,width:250}),this.getCart()}).catch(s=>{e.fire({icon:"error",title:s.response.data.message,width:250})})}}});export{u as c};

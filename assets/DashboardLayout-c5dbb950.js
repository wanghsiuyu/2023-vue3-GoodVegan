import{_,R as u,g as m,h as l,o as h,b as p,d as s,i as t,j as i,w as v,f as o,l as f}from"./index-ee355782.js";import{_ as g}from"./logo2-235e6bbc.js";const k="/vue3-QA/assets/brain-6c314af9.png";const{VITE_URL:x}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={components:{RouterLink:u,RouterView:m},methods:{checkLogin(){const c=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=c,this.$http.post(`${x}/api/user/check`).catch(e=>{alert(e.response.data.message),this.$router.push("/login")})},logout(){document.cookie=`myToken=; expires= ${new Date};`,this.$router.push("/login")}},mounted(){this.checkLogin()}},w={class:"container-fluid"},V={class:"row vh-100"},$={class:"col-2 bg-light py-12"},L=f('<div class="text-center mb-10"><img src="'+g+'" alt="logo" class="img-fluid mb-6 px-5"><div class="d-flex flex-column align-items-center"><img src="'+k+'" alt="avatar" class="rounded-circle mb-1" width="60"><small class="fw-bold">Brian Wu</small></div></div>',1),b={class:"nav flex-column px-5"},y={class:"nav-item"},E={class:"nav-item"},T={class:"nav-item"},D={class:"nav-item mt-5"},A=s("span",{class:"material-icons"}," logout ",-1),B={class:"col-10"};function C(c,e,N,S,I,n){const a=l("RouterLink"),r=l("RouterView");return h(),p("div",w,[s("div",V,[s("div",$,[L,s("ul",b,[s("li",y,[t(a,{to:"/admin/products",class:"nav-link"},{default:i(()=>[o("商品管理")]),_:1})]),s("li",E,[t(a,{to:"/admin/orders",class:"nav-link"},{default:i(()=>[o("訂單管理")]),_:1})]),s("li",T,[t(a,{to:"/",class:"nav-link"},{default:i(()=>[o("回前台首頁")]),_:1})]),s("li",D,[s("a",{href:"#",class:"nav-link d-flex align-items-center",onClick:e[0]||(e[0]=v((...d)=>n.logout&&n.logout(...d),["prevent"]))},[A,o("登出")])])])]),s("div",B,[t(r)])])])}const O=_(R,[["render",C]]);export{O as default};

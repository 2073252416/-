import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Router);
//路由数组
const routerList = [];
function imporAll(r){
  console.log(r.keys())
  r.keys().forEach(
    (key) => routerList.push(r(key).default)
  );
}
imporAll(require.context('./router',true,/\.routes\.js/))



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routerList
  ]
})

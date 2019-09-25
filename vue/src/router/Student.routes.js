
export default {
    path:'/Student',
    name:'Student',
    component: () => import(/* webpackChunkName: "about" */ '../views/Student.vue')
}
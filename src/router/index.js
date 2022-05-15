import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('../view/home/home.vue')
const Default = () =>
    import ('../view/default/default.vue')
const Market = () =>
    import ('../view/market/market.vue')
const My = () =>
    import ('../view/my/my.vue')
const Detail = () =>
    import ('../view/detail/Detail.vue')

Vue.use(Router)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/default',
        component: Default
    },
    {
        path: '/market',
        component: Market
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/detail/:iid',
        component: Detail
    },
]
const router = new Router({
    routes,
    mode: 'history'
})
export default router
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios"
import qs from "qs"
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
axios.defaults.baseURL = "http://localhost:8080"; //接口路径
axios.defaults.withCredentials = true; //设置发起请求的‘凭据模式’为‘include’，
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(ElementUI)
    /* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('user')
    }
    let user = JSON.parse(sessionStorage.getItem('user'))
    if (!user && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
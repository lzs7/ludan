import Vue from 'vue'
import Router from 'vue-router'
import service from '../components/service'
import supplier from '../components/supplier'
import commodity from '../components/pages/commodity.vue'
import demo from '../components/pages/demo'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'service',
            component: service
        },
        {
            path: '/login',
            component: resolve => require(['../user/Login.vue'], resolve)
        },
        // {
        //     path: '/suoolier',
        //     component: resolve => require(['../components/suoolier.vue'], resolve)
        // },
        {
            path: '/supplier',
            name: 'supplier',
            component: supplier,
            children: [{
                    name: "commodity",
                    path: "/commodity",
                    component: commodity
                },
                {
                    name: "demo",
                    path: "/demo",
                    component: demo
                },
            ]
        },


    ]
})
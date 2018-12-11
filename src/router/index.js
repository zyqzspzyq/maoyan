import Vue from 'vue'

import VueRouter from 'vue-router'

import auth from '@util/auth'


Vue.use(VueRouter)

import AppHome from '@pages/AppHome'

import AppCinema from '@pages/AppCinema'

import AppMy from '@pages/AppMy'

import AppHot from '@components/common/app-home/app-hot'

import AppSoon from '@components/common/app-home/app-soon'

import AppDetail from '@pages/AppDetail'

import AppCitys from '@pages/AppCitys'

import AppLogin from '@pages/AppLogin'

//路由表
const routes = [
    {
        path: '/',
        redirect: '/home/hot'
    },
    {
        path: '/home',
        name: 'home',
        component: AppHome,
        children: [
            {
                path: '',
                redirect: {name: 'hot'}
            },
            {
                path: 'hot',
                name: 'hot',
                component: AppHot
            },
            {
                path: 'soon',
                name: 'soon',
                component: AppSoon
            }
        ]

    },
    {
        path: '/cinema',
        name: 'movie',
        component: AppCinema
    },
    {
        path: '/login',
        name: 'login',
        component: AppLogin
    },
    {
        path: '/my',
        name: 'my',
        component: AppMy,
        beforeEnter:  (to, from ,next) => {
            let result = auth.authLogin()
            next(result.id ? true : {name: 'login'})
        }
    },
   
    {
        path: '/detail/:id',
        name: 'detail',
        component: AppDetail,
        props:true
    },
    {
        path: '/city',
        name: 'city',
        component: AppCitys
    }
]

//路由工具
const router = new VueRouter({
    mode: 'history',
    //默认方式 hash

    routes
})

export default router
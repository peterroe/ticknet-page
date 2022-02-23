/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-04-26 17:04:11
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-18 20:59:23
 */
/** @format */

import Router from 'vue-router'
import Vue from 'vue'

// import Login from '@/pages/login/index.vue'
// import Layout from '@/pages/layout/index.vue'
// import Message from "@/pages/message/index.vue"
// import Release from '@/pages/release/index.vue'
// import Register from '@/pages/register/index.vue'
// import Square from '@/pages/square/index.vue'
// import Search from '@/pages/search/index.vue'

//改用路由懒加载
//const Login = resolve => require(['@/pages/login/index.vue'], resolve)
//const Layout = resolve => require(['@/pages/layout/index.vue'], resolve)
const Layout = resolve => require(['@/pages/layout/index.vue'], resolve)
const Home = resolve => require(['@/pages/home/index.vue'], resolve)
    // const About = resolve => require(['@/pages/about/index.vue'], resolve)
const Group = resolve => require(['@/pages/group/index.vue'], resolve)
const Layer = resolve => require(['@/pages/layer/index.vue'], resolve)
const Product = resolve => require(['@/pages/product/index.vue'], resolve)
const Member = resolve => require(['@/pages/member/index.vue'], resolve)

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: '',
            redirect: '/Layer',
            meta: {
                title: ''
            },
            children: []
        },
        // {
        // 	path: '/layout',
        // 	name: 'root',
        // 	component: Layout,
        // 	meta: {
        // 		title: 'root'
        // 	},
        // 	children:[

        // 	]
        // },
        {
            path: '/layer',
            name: '首页',
            component: Layer,
            redirect: '/layer/home',
            children: [{
                    path: 'home',
                    component: Home
                },
                // {
                //     path: 'about',
                //     component: About
                // },
                {
                    path: 'group',
                    component: Group
                },
                {
                    path: 'product',
                    component: Product
                },
                {
                    path: 'member',
                    component: Member
                }
            ]
        }
    ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabs',
    redirect: '/home', // 重定向
    component: () => import('@/views/tabs'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
        redirect: '/home/recommend',
        children: [
          {
            path: '/home/recommend',
            component: () => import('@/views/home/children/recommend')
          },
          {
            path: '/home/hotspot',
            component: () => import('@/views/home/children/hotspot')
          },
          {
            path: '/home/notice',
            component: () => import('@/views/home/children/notice')
          },
          {
            path: '/home/move',
            component: () => import('@/views/home/children/move')
          },
          {
            path: '/home/good',
            component: () => import('@/views/home/children/good')
          },
          {
            path: '/home/variety',
            component: () => import('@/views/home/children/variety')
          }
        ]
      },
      {
        // 电影/影院
        path: '/film',
        name: 'film',
        component: () => import('@/views/film'),
        redirect: '/film/heat',
        children: [
          {
            path: '/film/heat',
            component: () => import('@/views/film/children/heat')
          },
          {
            path: '/film/ying',
            component: () => import('@/views/film/children/ying')
          },
          {
            path: '/film/shown',
            component: () => import('@/views/film/children/shown')
          },
        ]
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine')
      },
      {
        path: '/perform',
        name: 'perform',
        component: () => import('@/views/perform')
      },
      {
        path: '/match',
        name: 'match',
        component: () => import('@/views/match')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history', // 配置路由没有#
  base: process.env.BASE_URL,
  routes
})

export default router

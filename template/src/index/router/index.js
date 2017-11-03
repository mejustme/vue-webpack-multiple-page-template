import Vue from 'vue'
import Router from 'vue-router'

// 异步加载模块
const ModuleOne = () => import('../views/one/index.vue')
const ModuleTwo = () => import('../views/two/index.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      components: {
        default: ModuleOne
      }
    },
    {
      path: '/two',
      components: {
        default: ModuleTwo
      }
    },
    {
      path: '*',
      redirect: '/one'
    }
  ]
})

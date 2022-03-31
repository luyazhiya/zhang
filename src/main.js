import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterBar from './components/FooterBar'
import SearchBar from './components/SearchBar'
import TabBar from './components/TabBar'
import LoadMore from './components/LoadMore'
import Card from './components/Card'
import MoveList from './components/MoveList'
import ElButton from './components/ElButton'
import ShowList from './components/ShowList'
import Filmbar from './components/Filmbar'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios'
// 封装api
import api from './api'


import './assets/scss/base.scss'
import './assets/css/reset.css'
// 引入icon图标
import './assets/font/iconfont.css'
// 轮播图样式
import 'swiper/css/swiper.css'
// 下拉加载
import scroll from '@/mixins/scroll'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$axios = axios
Vue.component('FooterBar', FooterBar)
Vue.component('SearchBar', SearchBar)
Vue.component('TabBar', TabBar)
Vue.component('LoadMore', LoadMore)
Vue.component('Card', Card)
Vue.component('MoveList', MoveList)
Vue.component('ElButton', ElButton)
Vue.component('ShowList', ShowList)
Vue.component('Filmbar', Filmbar)
Vue.use(VueAwesomeSwiper)
Vue.mixin(scroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

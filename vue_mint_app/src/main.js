// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导入自适应
// import 'lib-flexible'
import Mint from 'mint-ui';
Vue.use(Mint);
// 解决移动端300s延迟
import fastclick from 'fastclick'
fastclick.attach(document.body) //解决移动端点击事件200ms延迟
Vue.config.productionTip = true
    //引入请求
import axios from 'axios';
Vue.prototype.$http = axios
    //引入better-scroller
    // import BScroll from 'better-scroll'
    // let scroll = new BScroll('.fenlei_content_left,.fenlei_content_right')
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    render: h => h(App),
    components: { App }
})
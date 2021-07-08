import Vue from 'vue'
import ElementUI from 'element-ui'
import router from '@/router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/animate.min.css'
import '@/style/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

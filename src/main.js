import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
createApp(App).mount('#footer')

// Vue.use(BootstrapVue)

import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import { createPinia } from 'pinia'
console.log(router, 0)
createApp(App).use(router).use(createPinia()).mount('#app')

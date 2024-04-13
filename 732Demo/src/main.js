import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css'

// Create a new Vue application instance.
const app = createApp(App)

// Registering Element Plus icons globally
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)

// Install the instance of Vue Router to the application.
app.use(router)

// Mount the Vue application to the DOM.
// It tells Vue to attach the app instance to the DOM element identified by the selector #app.
//You can find #app in index.html
app.mount('#app')
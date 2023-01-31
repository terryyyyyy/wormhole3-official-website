import { createApp } from 'vue'
import i18n from "@/lang";
import router from "@/router";
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'

createApp(App).use(i18n).use(router)
  .mount('#app')

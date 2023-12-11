/*import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import MenuView from '@/views/MenuView.vue'
import MenuAddView from '@/views/MenuAddView.vue'
import UserInfoView from '@/views/UserInfoView.vue'
import DoneOrderView from '@/views/DoneOrderView.vue'
import StatsView from '@/views/StatsView.vue'*/

import './assets/scss/style.scss'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



createApp(App)
.use(createPinia())
.use(router)
.mount('#app')

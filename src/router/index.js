import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '../Views/WelcomeView.vue'
import MenuView from '../Views/MenuView.vue'
import MenuAddView from '../Views/MenuAddView.vue'
import UserInfoView from '../Views/UserInfoView.vue'
import CartView from '../views/CartView.vue'
import DoneOrderView from '../Views/DoneOrderView.vue'
import StatsView from '../Views/StatsView.vue'
import LoginView from '../Views/LoginView.vue'; 
import OrderView from '../Views/OrderView.vue'; 

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/menuView',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/menuAddView',
    name: 'menuAdd',
    component: MenuAddView
  },
  {
    path: '/userInfoView',
    name: 'userInfo',
    component: UserInfoView
  },
  {
    path: '/doneOrderView',
    name: 'doneOrder',
    component: DoneOrderView
  },
  {
    path: '/StatsView',
    name: 'stats',
    component: StatsView
  },
  {
    path: '/LoginView', 
    name: 'login',
    component: LoginView
  },
  {
    path: '/CartView',
    name: 'cartView',
    component: CartView
  },
  {
    path: '/orderView',
    name: 'orderView',
    component: OrderView,
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

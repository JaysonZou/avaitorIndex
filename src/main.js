import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from './components/Home.vue'
import GameView from './Game/Game.vue'
import Login from './Login/Login.vue'

const routes = [
  { path: '/home', component: HomeView },
  { path: '/game', component: GameView },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


createApp(App).use(router).mount('#body-app')

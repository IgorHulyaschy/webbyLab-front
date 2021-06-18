import { createRouter, createWebHistory } from 'vue-router'
// import Main from '../views/Main'
import AddFilm from '../views/AddFilm'
import Search from '../views/Search'
import Films from '../views/Films'

const routes = [
  
  {
    path: '/addFilm',
    name: "AddFilm",
    component: AddFilm,
  },
  {
    path: '/search/film',
    name: "Search",
    component: Search,
  },
  {
    path: '/',
    name: "Films",
    component: Films,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

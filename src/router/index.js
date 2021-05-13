import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import login from '../views/login.vue'
import formulaire1 from '../views/formulaire1.vue'
import formulaire2 from '../views/formulaire2.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '/Produits',
        component: () => import(/* webpackChunkName: "Produits" */ '../views/Produits')
      },
      {
        path: '/utilisateurs',
        component: () => import(/* webpackChunkName: "utilisateurs" */ '../views/utilisateurs')
      },
      {
        path: '/deconnexion',
        component: () => import(/* webpackChunkName: "deconnexion" */ '../views/deconnexion')
      }
    ]
  },
  {
    path: '/formulaire1',
    name: 'formulaire1',
    component: formulaire1
  },
  {
    path: '/formulaire2',
    name: 'formulaire2',
    component: formulaire2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

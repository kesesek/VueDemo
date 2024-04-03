import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherPages from '../views/OtherPages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/BrowsePage.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: OtherPages
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: OtherPages
    },
    {
      path: '/songs',
      name: 'songs',
      component: OtherPages
    },
    {
      path: '/personalized_picks',
      name: 'personalized_picks',
      component: OtherPages
    }
  ]
})

export default router

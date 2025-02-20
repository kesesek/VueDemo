import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherPages from '../views/OtherPages.vue'

const router = createRouter({
  /**import.meta.env.BASE_URL is an environment variable provided by Vite, 
   * which represents the base URL of the application. 
   * This is typically used when building and deploying applications 
   * to ensure that routing works correctly based on the application's deployment path.
   * For example, if your app is deployed under a subpath such as https://example.com/my-app/,
   * then the BASE_URL will be set to /my-app/.
   */
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

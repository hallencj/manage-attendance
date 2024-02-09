import { createRouter, createWebHistory } from 'vue-router'
import ExportedFilesView from '../views/ExportedFilesView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/exported-files',
      name: 'exported-files',
      component: ExportedFilesView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

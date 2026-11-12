import { createRouter, createWebHistory } from 'vue-router'
import RickAndMortyView from '@/views/RickAndMortyView.vue'
import LocalidadesView from '@/views/LocalidadesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/rickandmorty',
      name: 'rickandmorty',
      component: RickAndMortyView
    },
    {
      path: '/',
      name: 'localidades',
      component: LocalidadesView
    }
  ],
})

export default router

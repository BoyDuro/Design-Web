import { createRouter, createWebHistory } from 'vue-router';
import FilmesView from './views/FilmesView.vue'
import SeriesView from './views/SeriesView.vue'

const routes = [
    {
        path: '/filmes',
        name: 'Filmes',
        compornent: FilmesView
    },
    {
        path: '/series',
        name: 'Series',
        component: SeriesView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
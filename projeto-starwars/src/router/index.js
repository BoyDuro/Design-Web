import { createRouter, createWebHistory } from 'vue-router';
import FilmesView from '../views/FilmesView.vue'
import SeriesView from '../views/SeriesView.vue'
import NoticiasView from '../views/NoticiasView.vue';

const routes = [
    {
        path: '/filmes',
        name: 'Filmes',
        component: FilmesView
    },
    {
        path: '/series',
        name: 'Series',
        component: SeriesView
    },
    {
        path: '/noticias',
        name: 'Noticias',
        component: NoticiasView
    }
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes
    })
export default router
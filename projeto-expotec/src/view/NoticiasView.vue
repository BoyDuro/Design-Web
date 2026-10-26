<script setup>
import { useNoticiasStore } from '@/stores/useNoticiasStore';
import { ref } from 'vue';
const noticiasStore = useNoticiasStore()

const titulo = ref('')
const texto = ref('')

function adicionarArtigoView(){
    noticiasStore.adicionarNoticia({
        titulo: titulo.value,
        texto: texto.value
    })
    texto.value = ''
    titulo.value = ''
}
</script>
<template>
    <article>
        <h2>Notícias</h2>

        <form @submit.prevent="adicionarArtigoView">
            <label>Título <input v-model="titulo"></label>
            <label>Texto <input v-model="texto"></label>
            <button type="submit">ADICIONAR</button>
        </form>

        <div v-for="noticia in noticiasStore.noticias" :key="noticia.id">
            <h3>{{ noticia.titulo }}</h3>
            <p>{{ noticia.texto }}</p>
            <button @click="noticiasStore.removerNoticia(noticia.id)">remover</button>
            <button @click="noticiasStore.favoritarNoticia(noticia.id)">
                {{ noticia.favorito ? '🧡' : '🤍' }}
            </button>
        </div>
    </article>
</template>
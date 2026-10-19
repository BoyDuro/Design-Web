<template>
    <div>
        <div v-for="item in noticias" :key="item.id">
            <section>
                <img :src= item.imagem>
                <h2>{{ item.titulo }}</h2>
                <p>{{ item.texto }}</p>
            </section>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import not1 from '@/assets/not1.jpg'
import not2 from '@/assets/not2.jpg'
import not3 from '@/assets/not3.jpg'
import not4 from '@/assets/not4.jpg'

const noticias = ref([
  { id: 1, imagem: not2, titulo: 'Filme StarFighter anunciado', texto: 'Filme de 2026 já está confirmado e ganha trailer na D23' },
  { id: 2, imagem: not3, titulo: 'Ahsoka - 2a temporada estreia em Janeiro', texto: 'A esperada segunda temporada é confirmada para Janeiro' },
  { id: 3, imagem: not1, titulo: 'Terceiro livro da série "Reign of the Empire" é anúnciado', texto: 'O terceiro e último livro da trilogia é anunciado após 2 anos de espera' },
  { id: 4, imagem: not4, titulo: 'Retorno de "Uma Nova Esperança" para os cinemas', texto: 'Comemoração dos 50 anos de Star Wars será com o retorno de seu primeiro filme' }
])

</script>

<script>
    export default {
        name: 'NoticiasView'
    }
</script>

<style scoped>
    div{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    section{
        text-align: left;
        margin: 6rem 0 0 8rem;
    }
    img{
        width: 10rem;
    }
</style>
<template>
    <article>
        <h2>Filmes</h2>
        <p>página de filmes</p>
        <ul>
            <li>
                <img src="../assets/poster1.jpg" alt="Rogue One">
                <p>Rogue One</p>
            </li>
            <li>
                <img src="../assets/poster3.jpg" alt="Episódio 4">
                <p>Ep.4 - Uma Nova Esperança</p>
            </li>
            <li>
                <img src="../assets/poster2.jpg" alt="Episódio 5">
                <p>Ep.5 - Império Contra-Ataca</p>
            </li>
        </ul>
    </article>
</template>
<script>
    export default{
        name: 'FilmesView'
    }
</script>

<style scoped>
    article{
        color: white;
    }
    ul{
        display: flex;
        justify-content: space-evenly;
    }
    img{
        max-width: 10rem;
    }
</style>
<template>
    <article>
        <h2>Séries</h2>
        <p>página de séries</p>
        <ul>
            <li>
                <img src="../assets/poster4.jpg" alt="Rogue One">
                <p>The Mandalorian</p>
            </li>
            <li>
                <img src="../assets/poster5.webp" alt="Episódio 4">
                <p>Andor - T1</p>
            </li>
            <li>
                <img src="../assets/poster6.jpg" alt="Episódio 5">
                <p>Ahsoka - T2</p>
            </li>
        </ul>
    </article>
</template>
<script>
    export default{
        name: 'SeriesView'
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
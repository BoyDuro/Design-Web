<template>
    <header>
        <h1>SITE DE STAR WARS</h1>
        <nav>
          <ul>
            <li><router-link to="/filmes">Filmes</router-link></li>
            <li><router-link to="/series">Séries</router-link></li>
          </ul>
        </nav>
        <router-view/>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background-color: white;
  padding: 1rem;
}
</style>

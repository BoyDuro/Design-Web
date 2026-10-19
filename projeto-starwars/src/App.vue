<template>
  <Header msg="Welcome to Your Vue.js App"/>
  <nav>
    <ul>
      <li><router-link to="/filmes">Filmes</router-link></li>
      <li><router-link to="/series">Séries</router-link></li>
      <li><router-link to="/noticias">Notícias</router-link></li>
    </ul>
  </nav>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
li {
  list-style-type: none;
}
ul {
  display: flex;
  justify-content: space-evenly;
}
a {
  color: white;
}
</style>

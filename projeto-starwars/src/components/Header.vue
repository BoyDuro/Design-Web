<template>
    <header>
        <h1>SITE DE STAR WARS</h1>
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
  color: #2c3e50;
  margin-top: 0;
}
</style>

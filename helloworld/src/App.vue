<template>
  <HeaderSection />
  <main>
     <p>ESTE É O ARQUIVO App.vue.</p>
  </main>
  <FooterSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection, FooterSection
  }
}
</script>

<style>
#app {
  background-color: #f2f2f2;

}
</style>

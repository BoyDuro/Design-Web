<script setup lang="ts">
import SectionHeader from './components/SectionHeader.vue';
</script>

<template>
  <SectionHeader />
  <main>
    <!-- A marcação de router view ficará aqui porque o conteúdo dos arquivos "view´s" ficarão exatamente nesse espaço, dentro do "main" -->
    <routerView />
  </main>
</template>
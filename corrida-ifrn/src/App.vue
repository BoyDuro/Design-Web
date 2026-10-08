<template>

  
  <nav>
    <router-link to="/organizacao">Organização</router-link>
    <router-link to="/contato">Contato</router-link>
  </nav>
  
  <router-view />

  <section class="dicas">
    <CartaoDica dica="Use tênis específico para corrido." />
    <CartaoDica dica="Não teste roupas novas no dia da prova." />
    <CartaoDica dica="Use géis de carboidrato que seu corpo já conhece."/>
    <CartaoDica dica="Faça ativações antes da prova."/>
    <CartaoDica dica="Aumente a ingestão de carboidratos."/>
  </section>

</template>


<script>
import CartaoDica from './components/CartaoDica.vue';
export default {
  name: 'App',
  components: {
    CartaoDica
  }
}
</script>

<style>
.dicas {
  display: flex;
  flex-wrap: wrap;
}
</style>

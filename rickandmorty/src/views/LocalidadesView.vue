<script setup>
    import { ref, onMounted } from 'vue'
    import CardPadrao from '@/components/CardPadrao.vue';
    const localidades = ref([]); //variável reativa

    async function buscarLocalidades(){
        try{
            //await - porque a conexão demora, logo é necessário esperar
            const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const dados = await resposta.json();
            localidades.value = dados;
        }catch(erro){
            console.error('Erro a conexão com a API')
        }
    }
    //onMounted - método que chama a função quando a aplicação for "montada"
    onMounted(buscarLocalidades);
</script>

<template>
    <h2>Localidades</h2>
    <div>
        <CardPadrao v-for="item in localidades" 
        :key="item.id"
        :titulo="item.nome"
        :subtitulo="item.sigla"
        />
    </div>
    

</template>
<style scoped>
    div{
        display: flex;
        flex-wrap: wrap;
    }
</style>
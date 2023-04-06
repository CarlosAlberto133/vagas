<template>
    <div>
        <!--
        <slot name="titulo" :dadosTitulo="{ titulo: 'Título Lista', nroVagas: 15 }">
            <p>Título da lista de vagas</p>
        </slot>
        -->
        <slot :vagas="vagas">
            <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
                <div class="col">
                <vaga v-bind="vaga"></vaga>
                </div>
            </div>
        </slot>

        <!--
        <slot name="rodape" :dadosRodape="{ titulo: 'Rodapé Lista', paginacao: {nroPaginas: 10, paginaAtual: 5} }">
            <p>O rodapé da lista de vagas</p>
        </slot>
        -->
        </div>
</template>

<script>
import Vaga from '@/components/comuns/Vaga.vue'

export default {
    name: 'ListaVagas',
    data: () => ({
        vagas: []
    }),
    components: {
        Vaga
    },
    activated() {
      this.vagas = JSON.parse(localStorage.getItem('vagas'))
    },
    mounted() {
      this.emitter.on('filtarVagas', vaga => {
        const vagas = JSON.parse(localStorage.getItem('vagas'))
        this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())) //true ou false: o método filter cria um array com todos os elementos que passaramno teste implementado na função
      })
    }
}
</script>

<style scoped>

</style>

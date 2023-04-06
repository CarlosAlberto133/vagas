import { createApp } from 'vue'
import App from './App.vue'

//Para instalar o mitt, instale com o seguinte comando
//npm install --save mitt

//importando o pacote mitt
import mitt from 'mitt'

//criando a instância do pacote mitt
const emitter = mitt()

//iniciar a instância do vue com base no componente app
const app = createApp(App);

//configutar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade global estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do vue com o elemento de HTML de Id App
app.mount('#app')

//createApp(App).mount('#app')

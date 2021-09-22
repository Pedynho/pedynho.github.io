<template>
  <div class="central-menu">
    <img class="img-profile" src="./assets/pp.jpg" alt="Pedro Gomes">
    <h1>Pedro Gomes</h1>
    <div class="row"></div> 
  </div>
  <div class="menu-items">
    <div class="items">
      <span @click="selected = 1" :class="{'item-selected':selected == 1}">Sobre</span>
      <span @click="selected = 2" :class="{'item-selected':selected == 2}">Stacks</span>    
      <span @click="selected = 3" :class="{'item-selected':selected == 3}">Experiências</span>
    </div> 
  </div>
  <card v-if="selected == 1">
    <p>Graduando em Eng. de Computação pela UFC campus Sobral.</p>
  </card>
  <card v-if="selected == 2">
    <teste>
    </teste>
  </card>
  <card v-if="selected == 3">
    <p>E lá vamos nós inventar o que num precisa neh.</p>
  </card>
</template>

<script>
import Card from './components/Card.vue';
import Teste from './components/Teste.vue';
export default {
  name: 'Home',
  components: {
    Card,
    Teste
  },
  data(){
    return {
      selected: 1
    }
  }
}
</script>
<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
}
.img-profile {
  border-radius: 50%;
  max-width: 7rem;
}
h1{
  font-size: 1.6rem;
}
.row{
  background-color: lightgray;
  width: 15rem;
  height: 2px;
  margin-bottom: 1rem;
}
.central-menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu-items{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.items{
  text-align: center;
}
.items span{
  font-size: 1.5rem;
  margin-left: 1rem;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.item-selected{
  background-color: rgb(197, 231, 231);
}
@media screen and (max-width: 500px) {
  .items {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 1rem;
    text-align: left;
  }
  .item-selected{
    background-color: #fff;
    color: rgb(0, 212, 240);
  }
}
</style>

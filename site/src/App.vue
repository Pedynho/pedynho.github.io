<template>
  <div class="central-menu">
    <img class="img-profile" src="./assets/pp.jpg" alt="Pedro Gomes">
    <h1>Pedro Gomes</h1>
    <div class="social-box">
      <a href="https://www.instagram.com/pedro_gomes.1/">
        <fa :icon="['fab','instagram']" size="2x"/>
      </a>
      <a href="https://www.linkedin.com/in/pedrogomesmoura/">
        <fa :icon="['fab','linkedin']" size="2x"/>
      </a>
      <a href="https://github.com/pedynho">
        <fa :icon="['fab','github']" size="2x"/>
      </a>
    </div>
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
    <about>
    </about>
  </card>
  <card v-if="selected == 2">
    <stacks>
    </stacks>
  </card>
  <card v-if="selected == 3">
    <experiences>
    </experiences>
  </card>
</template>

<script>
import Card from './components/Card.vue';
import Stacks from './components/Stacks.vue';
import Experiences from './components/Experiences.vue';
import About from './components/About.vue'
export default {
  name: 'Home',
  components: {
    Card,
    About,
    Stacks,
    Experiences
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
  width: 30rem;
  height: 2px;
  margin-bottom: 1rem;
}
.central-menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.central-menu h1{
  margin: 0;
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
.social-box{
  justify-content: space-between;
  padding: 1em;
}
.social-box a{
  color: black;
  cursor: pointer;
  margin: 5px;
}
@media screen and (max-width: 500px) {
  .items span{
    font-size: 1.1rem;
    margin-left: 1rem;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .item-selected{
    background-color: rgb(197, 231, 231);
  }
  .row{
    width: 20rem;
  }
}
</style>

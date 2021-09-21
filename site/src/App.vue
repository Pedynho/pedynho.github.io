<template>
  <div class="central-menu">
    <img class="img-profile" src="./assets/pp.jpg" alt="Pedro Gomes">
    <h1>Pedro Gomes</h1>
    <div class="row"></div>
    <div class="items">
      <span>Sobre</span>
      <span>Stacks</span>    
      <span>Esperiências</span> 
    </div>   
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
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
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.items{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.items span{
  font-size: 1.5rem;
  margin-left: 1rem;
}
@media only screen and (max-width: 400px) {
  .items {
    flex-direction: column;
    align-items: initial;
    align-self: flex-start;
    margin-left: 1rem;
  }
}
.img-profile {
  border-radius: 50%;
  max-width: 7rem;
}
</style>

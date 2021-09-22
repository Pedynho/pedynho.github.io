<template>
    <div class="card-container">
      <div class="card-content">
        <slot></slot> 
      </div>
    </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style>
.card-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-content{
    width: 500px;
    background-color: rgb(197, 231, 231);
    padding: 2em;
    border-radius: 20px;
}
@media screen and (max-width: 500px) {
  .card-content{
    width: 80%;
  }
}

</style>

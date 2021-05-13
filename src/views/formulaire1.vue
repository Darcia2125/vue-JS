<template>
  <div class="formulaire1">
    <p>Type : <input type="text" name="type" ></p>
    <p>Prix:<input type="text" name="prix"  ></p>
    <div class="style1">
    <button type= "submit" v-on:click="secure()"><router-link to="/Produits" >Enregistrer</router-link> </button>
    </div>
    <div class="style2">
    <button type= "submit" v-on:click="secure()"><router-link to="/Produits" >Annuler</router-link> </button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .formulaire1{
    background-color: white;
    display: block;
    width: 30%;
    padding: 30px;
    border: solid pink;
    box-shadow: 0 0 5px 0;
    top: 20%;
    left: 35%;
    position: absolute;
  }
  .style1{
    position: relative;
    float: left;
  }
  .style2{
    position: relative;
    float: right;
  }
</style>

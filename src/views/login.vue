<template>
  <div class="login">
    <h1>Login</h1>
    <p>Username : <input type="text" name="login"  ></p>
    <p>Password:<input type="password" name="password"  ></p>
    <button type= "submit" v-on:click="secure()"><router-link to="/Produits" >Envoyer</router-link> </button>
  </div>
</template>

<script>
</script>

<style scoped>
  .login{
    background-color: grey;
    display: block;
    width: 30%;
    padding: 30px;
    border: solid rgb(58, 52, 52);
    box-shadow: 0 0 5px 0;
    top: 20%;
    left: 35%;
    position: absolute;
  }
</style>

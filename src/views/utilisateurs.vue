<template>
    <div class="utilisateurs">
        <div class="example-1">
        <button class="bouton">Creer </button>
        </div>
        <div class="example-2">
        <button class="bot" >Annuler </button>
        </div>
        <table>
    <thead>
        <tr>
            <th colspan="2">Utilisateurs</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Username</td>
            <td>Password</td>
            <td>Action</td>
        </tr>
        <tr>
            <td>Darcia</td>
            <td>1234</td>
            <td><button>Supprimer</button></td>
        </tr>
    </tbody>
</table>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 10px;
  background-color: #42b983;
  width: 100%;
  height: 100%;

}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
thead,
tfoot {
    background-color: #333;
    color: #fff;
}
.example-1{
    position: relative;
    float: left;
}
.bouton{
    font-size: 22px;
}
.example-2{
    position: relative;
    float: right;
    width: 9%;
}
.bot{
    font-size: 22px;
}
</style>

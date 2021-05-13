<template>
    <div class="zoom colonne">

        <div>
        <table>
            <div class="creer"><button>Créer</button></div>
            <div class="supprimer"><button>...</button></div>
            <div><router-link to="/formulaire1" ><img src="../assets/a.jpg" /></router-link><div class="txt" ><router-link to="/formulaire1" >Coussin décoratif </router-link><br> Prix: 15000ar</div></div></table>
        </div>
        <div>
        <br><table>
            <div class="creer"><button>Créer</button></div>
            <div class="supprimer"><button>...</button></div>
            <div><router-link to="/formulaire2" ><img src="../assets/b.jpg" /></router-link><div class="txt" ><router-link to="/formulaire2" >Coussin mimi</router-link>
             <br> Prix:20 000ar</div></div></table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.zoom div img {
    width: 150px;
    height: 150px;
    margin-right: 50px;
    margin-bottom: 60px;
    margin-top: 15px;
    transform: scale(1);
    transition: .3s ease-in-out;
    -webkit-transform: scale(1);
    -webkit-transition: .3s ease-in-out;
}
.zoom div:hover img{
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
}
.txt {
    color: brown;
    margin-right: 45%;
}
table {
    border: 4px solid paleturquoise;
    border-radius: 10px;
    margin-left: 38%;
    text-align: center;
    width: 25%;
}
.supprimer{
    position: relative;
    float: right;
    font-size: 24px;
}
.creer{
    position: relative;
    float: right;
    font-size: 24px;
}
</style>

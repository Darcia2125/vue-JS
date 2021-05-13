<template>
    <div class="sidebar">
        <div class="title">Menu</div>
        <div class="menu-items">
            <router-link to="/Produits" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Produits</div>
            </router-link>
            <router-link to="/utilisateurs" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Utilisateurs</div>
            </router-link>
            <router-link to="/" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Se déconnecter</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .title{
        color: white;
        font-size: 30px;
        margin-top: 10px;
    }
    .menu-items{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        margin-left: 6px;
    }
    .menu-items > * {
        margin-top : 60px;
    }
    .side-btn:focus{
        outline: none;
    }
    .side-btn.active{
        position: relative;
        background-color: white;
        color: teal;
        font-weight: 500px;
        margin-left: 10px;
        border-radius: 30px 0 0 30px;
    }
    .side-btn.active::before{
        position: absolute;
        content: "";
        top: -30%;
        right: 0;
        height: 30px;
        width: 30px;
        background-color: white;
    }
    .side-btn.active::after{
        position: absolute;
        content: "";
        bottom: -30%;
        right: 0;
        height: 30px;
        width: 30px;
        background-color: white;
    }
    .side-btn{
        border: none;
        padding: 16px 0px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        background-color: transparent;
    }
    .side-btn.active .link-container::before{
        position: absolute;
        top: -60px;
        right: 0;
        content: "";
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: teal;
    }
    .side-btn.active .link-container::after{
        position: absolute;
        bottom: -60px;
        right: 0;
        content: "";
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: teal;
        z-index: 90;
    }
</style>

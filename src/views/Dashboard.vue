<template>
  <div class="dashboard">
    <sidebar/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'
export default {
  components: { sidebar },
  name: 'Home'
}
</script>

<style scoped>
  .dashboard{
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width: 100vw;
  }
  .content{
    background-color: white;
    border-radius: 20px;
    margin: 6px 6px 6px 0px;
  }
</style>

<template>
  <div id="app">
<v-app>
  <page-header></page-header>
<main>
    <v-container fluid>
<router-view/>
        
    </v-container>
</main>

</v-app>


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

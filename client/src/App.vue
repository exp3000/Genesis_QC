<template>
  <div id="app">
<v-app>
  <page-header></page-header>
<main>

    <v-app>
    <v-content>
      <v-container fluid
                   fill-height>
        <v-layout align-center
                  justify-center>
          <v-flex xs12
                  sm8
                  md4>
           
           <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>


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

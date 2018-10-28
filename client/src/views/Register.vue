<template>
<v-app>
  <v-toolbar>
     <v-toolbar-title>Register</v-toolbar-title>
     <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat>Login</v-btn>
      <v-btn flat>Signup</v-btn>
      <v-btn flat>Home</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <main>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
  </main>
</v-app>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js"

export default {
  data(){
    return{
      email: "",
      password: "",
      error: null
    }
  },
  methods:{
    async register(){
      //if authentication
      try{
        await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

      } catch(error){
        //error.response.data will be returned from axios
        this.error = error.response.data.error
      }
      

    }
  }
}
</script>

<style scoped>
  .form-signin{
    width: 20em;
    margin: 0 auto;
  }
  .container{
    width: auto;

  }
  .error{
    color: red;
  }
</style>

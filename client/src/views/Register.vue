<template>
  <div class="Register">

<div class="container">
 <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input 
          type="email" 
          id="inputEmail" 
          class="form-control" 
          placeholder="Email address" 
          v-model="email"
          required autofocus>
        
        <label for="inputPassword" class="sr-only">Password</label>
        <input 
          type="password" 
          id="inputPassword" 
          class="form-control" 
          placeholder="Password" 
          v-model="password"
          required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>

        <div class="error" v-html="error"></div>

        <button 
          class="btn btn-lg btn-primary btn-block" 
          type="submit"
          @click ="register"
          >Sign in</button>

      </form>
    </div> <!-- /container -->
    <h1></h1>
  </div>
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

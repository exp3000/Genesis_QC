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
      password: ""
    }
  },
  methods:{
    async register(){
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style>
  .form-signin{
    width: 20em;
    margin: 0 auto;
  }
  .container{
    width: auto;

  }
</style>

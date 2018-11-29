<template>

  <panel title="Login">
    <v-text-field name="email"
                  label="email"
                  v-model="email"></v-text-field>
    <v-text-field name="password"
                  type="password"
                  label="password"
                  v-model="password"></v-text-field>
    <div class="danger-alert"
         v-html="error" />
    <v-btn @click="login"
           color="info">Login</v-btn>
  </panel>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      //if authentication
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        //calls the store setToken method action using dispatch
        //returns the token and user from the response object
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        //reroute used to songs page after login
        this.$router.push({
          name: "songs"
        });
      } catch (error) {
        //error.response.data will be returned from axios
        this.error = error.response.data.error;
      }
    }
  },
  components: {}
};
</script>

<style scoped>
.form-signin {
  width: 20em;
  margin: 0 auto;
}

.container {
  width: auto;
}

.error {
  color: red;
}
</style>

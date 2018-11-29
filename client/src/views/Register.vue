<template>

  <panel title="Register">
    <v-text-field name="email"
                  label="email"
                  v-model="email"></v-text-field>
    <v-text-field name="password"
                  type="password"
                  autocomplete="new-password"
                  label="password"
                  v-model="password"></v-text-field>
    <div class="danger-alert"
         v-html="error" />
    <v-btn @click="register"
           color="info">Register</v-btn>
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
    async register() {
      //if authentication
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });

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

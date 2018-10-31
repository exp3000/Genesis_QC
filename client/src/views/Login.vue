<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <div class="white elevation-2">
              <v-toolbar flat dense class="cyan">
                <v-toolbar-title class="mr-4">Login</v-toolbar-title>
              </v-toolbar>
              <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field name="email" label="email" v-model="email"></v-text-field>
                <v-text-field name="password" label="password" v-model="password"></v-text-field>
                <div class="danger-alert" v-html="error" />
                <v-btn @click="login" color="info">Login</v-btn>
              </div>
            </div>
            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        //error.response.data will be returned from axios
        this.error = error.response.data.error;
      }
    }
  }
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

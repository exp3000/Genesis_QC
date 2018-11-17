<template>
    <v-toolbar fixed
               class="cyan">
        <v-toolbar-title class="mr-4">
            <v-btn flat
                   replace
                   large
                   :to="{name: 'register'}">Register</v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <!-- <p>{{this.$store.state.user.email}}</p> -->
            <v-btn flat
                   :to="{name: 'songs'}">Browse</v-btn>
            <v-btn flat
                   :to="{name: 'songs-create'}">Add</v-btn>

            <v-btn v-if="!$store.state.isUserLoggedIn"
                   flat
                   :to="{name: 'login'}">Log In</v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn"
                   flat
                   :to="{name: 'register'}">Sign Up</v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn"
                   @click="logout"
                   flat
                   :to="{name: 'login'}">Log Out</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("user", null);
    }
  }
};
</script>

<style>
</style>


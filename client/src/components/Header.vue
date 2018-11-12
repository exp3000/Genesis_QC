<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
            <v-btn flat replace large to="home">Register</v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items
            >
            <v-btn flat to="songs">Browse</v-btn>

            <v-btn v-if="!$store.state.isUserLoggedIn" flat to="login">Log In</v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat to="register">Sign Up</v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat to="login">Log Out</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('user', null)
   
        }
    }
};
</script>

<style>
</style>


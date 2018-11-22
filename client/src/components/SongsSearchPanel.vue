<template>
    <panel title="search">
        <v-text-field name="search"
                      label="search by album/ genre/ etc."
                      v-model="search"></v-text-field>
    </panel>
</template>

<script>
import _ from "lodash";
import { sync } from 'vuex-router-sync';

export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
      //add 700ms delay to search to ensure not too many requests
      //are sent to server at the same time, slowing down the page
      search: _.debounce(async function (value){
          // search(value) {
      const route = {
        name: "songs"
      }

      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }

      this.$router.push(route);
      }, 700),

    //add watcher to the query string
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style>
</style>

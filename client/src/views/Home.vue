<template>
  <div class="home">

    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/views/Login.vue' // @ is an alias to /src

@Component({
  components: {
  Login,
  },
  })
export default class Home extends Vue {}
</script>

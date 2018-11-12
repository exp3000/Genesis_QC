<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
              <panel />

            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    }
}
</script>

<style>

</style>

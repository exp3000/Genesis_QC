<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <panel title="Songs">

                <div v-for="song in songs" :key="song.title">
                    {{song.title}} -  {{song.artist}}


                </div>


            </panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService"

export default {
  data () {
    return{
      songs: [
       
      ]
    }
    
  },
  async mounted (){
    //when Songs view component is mounted, request backend for list of songs (saved as index)
    this.songs = await SongsService.index()
  },
  components: {
    Panel
  }
};
</script>

<style>

</style>

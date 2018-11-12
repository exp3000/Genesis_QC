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

export default {
  data () {
    return{
      songs: [
        {
          title: "Song 1",
          artist: "Band 1",
          album: "Album 1"
        },
        {
          title: "Song 2",
          artist: "Band 2",
          album: "Album 2"
        }
      ]
    }
    
  },
  components: {
    Panel
  }
};
</script>

<style>

</style>

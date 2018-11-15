<template>
    <v-app>
        <v-content>
            <v-container fluid
                         >
                <v-layout style="padding-top : 200px"
                          >

                    <v-flex xs4>
                        <panel title="Song Metadata">

                            <v-text-field label="Title"
                                          v-model="song.title"></v-text-field>
                            <v-text-field label="Artist"
                                          v-model="song.artist"></v-text-field>
                            <v-text-field label="genre"
                                          v-model="song.genre"></v-text-field>
                            <v-text-field label="album"
                                          v-model="song.album"></v-text-field>
                            <v-text-field label="youtubeId"
                                          v-model="song.youtubeId"></v-text-field>

                        </panel>
                    </v-flex>

                    <v-flex xs8>
                        <panel title="Song Tab" style="margin : 20px">
                            <v-text-field label="tab"
                                          v-model="song.tab"></v-text-field>
                        </panel>

                                      <v-btn @click="create"
                     color="info">Create Song</v-btn>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>F

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";

export default {
  data() {
    return {
        song:{
      title: null,
      artist: null,
      genre: null,
      album: null,
      youtubeId: null,
      tab: null
        }

    };
  },
  components: {
    Panel
  },
  methods: {
      async create(){
          try {
              await SongsService.post(this.song)
              this.$router.push({
                  name: 'songs'
              })
          } catch (error) {
              console.log('Adding song error: ' + error)
          }
          
      }
  }
};
</script>

<style>
</style>

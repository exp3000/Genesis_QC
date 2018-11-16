<template>



        <v-layout >

          <v-flex xs4>
            <panel title="Song Metadata">

              <v-text-field label="Title"
                            required
                            :rules="[required]"
                            v-model="song.title"></v-text-field>
              <v-text-field label="Artist"
                            required
                            :rules="[required]"
                            v-model="song.artist"></v-text-field>
              <v-text-field label="genre"
                            required
                            :rules="[required]"
                            v-model="song.genre"></v-text-field>
              <v-text-field label="album"
                            required
                            :rules="[required]"
                            v-model="song.album"></v-text-field>
              <v-text-field label="album URL"
                            required
                            :rules="[required]"
                            v-model="song.albumImageUrl"></v-text-field>
              <v-text-field label="youtubeId"
                            required
                            :rules="[required]"
                            v-model="song.youtubeId"></v-text-field>

            </panel>
          </v-flex>

          <v-flex xs8>
            <panel title="Song Tab"
                   style="margin : 20px">
              <v-text-field label="tab"
                            multi-line
                            required
                            :rules="[required]"
                            v-model="song.tab"></v-text-field>
            </panel>

            <div v-if="error">
              {{error}}

            </div>
            <v-btn @click="create"
                   color="info">Create Song</v-btn>
          </v-flex>

        </v-layout>
 


</template>

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        tab: null
      },
      error: null,
      required: value => !!value || "required."
    };
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      //check that all fields have been fuekd before adding song
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please Fill In All Required Feilds!";
        return;
      }
      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: "songs"
        });
      } catch (error) {
        console.log("Adding song error: " + error);
      }
    }
  }
};
</script>

<style>
</style>

<template>

  <panel title="Songs">

    <v-btn fab
           slot="action"
           to="create"
           class="cyan  accent-2"
           absolute
           right
           middle>
      <v-icon>add</v-icon>
    </v-btn>

    <div v-for="song in songs"
         :key="song.id"
         class="song">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>

          <v-btn class="cyan"
                 :to="{name: 'song', params: {songId: song.id, song: song}}">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>

          <img class="album-image"
               :src="song.albumImageUrl"
               alt="">

        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    //when Songs view component is mounted, request backend for list of songs (saved as index)
    this.songs = (await SongsService.index()).data;
  },
  watch: {
    // check for search query changes and get resuts from backend
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data;
      }
    }
  }
};
</script>

<style>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 24px;
}

.song-artist {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

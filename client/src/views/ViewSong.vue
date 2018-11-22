<template>
    <v-layout>
        <v-flex xs-6>
            <panel title="Song Metadata">

                <v-layout>
                    <v-flex xs6>
                        <div class="song-title">
                            {{song.title}}
                        </div>
                        <div class="song-artist">
                            {{song.artist}}
                        </div>

                        <v-btn class="cyan"
                               :to="{name: 'edit', params: {songId: song.id}}">
                            Edit
                        </v-btn>
                    </v-flex>

                    <v-flex xs6>

                        <img class="album-image"
                             :src="song.albumImageUrl"
                             alt="">
                        <br>
                        {{song.album}}

                    </v-flex>
                </v-layout>

            </panel>

        </v-flex>

        <v-flex xs-6>
            <panel title="Tabs">
                <textarea name="tab"
                          id="tab"
                          v-model="song.tab"
                          readonly></textarea>

            </panel>

        </v-flex>

    </v-layout>

</template>

<script>
import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/SongsPanel";
import Panel from "@/components/Panel";

export default {
  data() {
    return {
      song: {}
    };
  },
  components: {
    SongsPanel
  },
  async mounted() {
    //when Songs view component is mounted, request backend for list of songs (saved as index)
    //const songId = this.$route.params.songId
    //store has route because in main.ts 'sync(store, router)' line
    //route is synced to store
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  }
};
</script>

<style>
</style>

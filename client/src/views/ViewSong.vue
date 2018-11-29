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
                   :to="{name: 'edit', 
                               params() {
                                   return{
                                       songId: song.id}
                               } }">
              Edit
            </v-btn>

            <v-btn class="cyan"
                   @click="Bookmark"
                   v-if="isUserLoggedIn && !bookmark">
              Bookmark
            </v-btn>

            <v-btn class="cyan"
                   @click="Unbookmark"
                   v-if="isUserLoggedIn  && bookmark">
              UnBookmark
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
//avoids having to type $store.state.etc...
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";
import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/SongsPanel";
import Panel from "@/components/Panel";

export default {
  data() {
    return {
      song: {},
      bookmark: false
    };
  },
  props: [
    song
  ],
  components: {
    SongsPanel
  },
  async mounted(){
    //const songId = this.$store.state.route.params.songId;
   // this.song = (await SongsService.show(songId)).data;
  }  ,
  watch: {
    async song() {
      //const songId = this.$store.state.route.params.songId;
      //this.song = (await SongsService.show(songId)).data;

      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data;

        console.log("bookmark: ", this.bookmark);

        //this.isBookmarked = !!bookmark;
      } catch (err) {
        console.log(err);
      }
    }
    //when Songs view component is mounted, request backend for list of songs (saved as index)
    //const songId = this.$route.params.songId
    //store has route because in main.ts 'sync(store, router)' line
    //route is synced to store
  },

  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  methods: {
    async Bookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data;
      } catch (err) {
        console.log(err);
      }
    },

    async Unbookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>

<template>
<songs-panel></songs-panel>
</template>

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/SongsPanel";

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
  components: {
    Panel,
    SongsPanel
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

<template>
<div>
<songs-search-panel></songs-search-panel>
  <songs-panel></songs-panel>
</div>

</template>

<script>

import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/SongsPanel";
import SongsSearchPanel from "@/components/SongsSearchPanel";

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

    SongsPanel,
    SongsSearchPanel
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

import Api from '@/services/api'

export default {
    //make index (name whatever you want) call to /songs endpoint
    index(search) {
        return Api().get('songs', {
            params: {
                search: search
            }
        })
    },

    //add song data
    post(song) {
        return Api().post('songs', song)
    },

    show(songId) {
        return Api().get(`songs/${songId}`)
    },

    put (song) {
        return Api().put(`songs/${song.id}`, song)
    }

}

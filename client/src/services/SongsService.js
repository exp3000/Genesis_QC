import Api from '@/services/api'

export default {
    //make index (name whatever you want) call to /songs endpoint
    index() {
        return Api().get('songs')
    },

    //add song data
    post(song) {
        return Api().post('songs', song)
    }
}

// call the above method from another file
// AuthenticationService.register({
//     email: 'email@gmail.com',
//     password: '123456'
// })
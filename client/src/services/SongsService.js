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
    }
}

// call the above method from another file
// AuthenticationService.register({
//     email: 'email@gmail.com',
//     password: '123456'
// })
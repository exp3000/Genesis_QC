import Api from '@/services/api'

export default {
    register (credentials){
        return Api().post('register', credentials)
    },
    login (credentials){
        return Api().post('login', credentials)
    }
}

// call the above method from another file
// AuthenticationService.register({
//     email: 'email@gmail.com',
//     password: '123456'
// })
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //cant modify state unless through action or mutation
    strict: true, 
    state: {
        //global states for the application
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations:{
        setToken (state, token){
            //changes state to token
            state.token = token
        },
        setUser (state, user){
            //changes state to token
            state.user = user
        }
    },
    actions:{
        setToken ({commit}, token){
            //calls mutation set Token
            commit('setToken', token)
        },
        setUser ({commit}, user){
            //calls mutation set Token
            commit('setUser', user)
    }
}
})
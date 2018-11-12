import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //cant modify state unless through action or mutation
    strict: true, 
    state: {
        //global states for the application
        //track tokens (to validate password), user name, and login status
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations:{
        //Vuex mutations are essentially events: 
        //each mutation has a name and a handler.
        //mutation is the only way to modify state

        setToken (state, token){
            //changes state to token
            state.token = token
            //if token is defined
            if (token){
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user){
            //changes state to token
            state.user = user
        }
    },
    actions:{
        //action is business logic action can dispatch more than 1 mutation at a time, it just implements the business logic, it doesn't care about data changing (which manage by mutation)
        //Actions are just functions that dispatch mutations.
        setToken ({commit}, token){
            //calls mutation set Token
            //commit performs async logic
            //calls mutation 'setToken' and set token
            commit('setToken', token)
        },
        setUser ({commit}, user){
            //calls mutation set Token
            commit('setUser', user)
    }
}
})
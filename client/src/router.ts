import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Songs from './views/Index.vue'
import CreateSong from './views/CreateSong.vue'
import EditSong from './views/EditSong.vue'
import ViewSong from './views/ViewSong.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Songs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'edit',
      component: EditSong
    },
    //redirect routes that dont exist here:
    {path: '*',
  redirect: 'songs'}

  ]
})

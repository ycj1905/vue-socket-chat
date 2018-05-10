import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ChatRoom from '@/components/ChatRoom'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/chatroom',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    }
  ]
})

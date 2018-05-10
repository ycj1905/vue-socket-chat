import Vue from 'vue'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

Vue.use(Vuex);

// export default new Vuex.Store({
export const store = new Vuex.Store({
    state: {
        status: false,
        message: null
    },
    mutations:{
        SOCKET_CONNECT: (state,  status ) => {
            console.error(state)
            state.status = status;
        },
        // SOCKET_USER_MESSAGE: (state,  message) => {
        //     state.message = message;
        // }
        createMessage: (state, status) => {
            this.$socket.emit('createMessage', 'Hello From Vue!')
            // console.log(state)
            // state.message = status;
        }
    },
    actions: {
        otherAction: (context, type) => {
            return true;
        },
        createMessage: (context, message) => {
            // context.dispatch('newMessage', message);
            context.commit('createMessage', message);
            // if (message.is_important) {
            //     context.dispatch('alertImportantMessage', message);
            // }
        },
        connect: (context, payload) => {
            context.commit('SOCKET_CONNECT', payload);
        },
    }
})
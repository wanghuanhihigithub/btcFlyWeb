import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);
// const store = new Vuex.Store({
//     // modules:{
//         user,
//     // },
//     getters
// });


const store = new Vuex.Store({
  modules: {
    user
  },
  getters
});
// store.dispatch('login',{username:"yezi",password:"yezi"});

export default store;
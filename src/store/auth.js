import firebase from '@/firebase';

const state = {
  user: {},
  isLoggedIn: false,
};
/* eslint-disable */
const mutations = {
    setUser(state, user) {
      if (user) {
        state.user = user;
        state.isLoggedIn = true;
      } else {
        state.user = {};
        state.isLoggedIn = false;
      }
    },
  };
  const actions = {
    async login() {
      console.log("Ankush SignIn");
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    },
    async logout() {
      console.log("Ankush SignOut");
      await firebase.auth().signOut();
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };

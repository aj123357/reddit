import db from '@/db';
import { firestoreAction } from 'vuexfire';
/* eslint-disable */
const state = {
  users: [],
};

const getters = {
  usersById() {
    return state.users.reduce((byId, user) => {
      byId[user.id] = user;
      return byId;
    }, {});
  },
};

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', db.collection('users'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};

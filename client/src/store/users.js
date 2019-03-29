import Vue from "vue";
import Vuex from "vuex";
import users from "../serverInterface/routes/user.routes";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    signUpForm: {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  },
  getters: {},
  actions: {},
  mutations: {
    setName(state, name) {
      state.signUpForm.name = name;
    },
    setUsername(state, username) {
      state.signUpForm.username = username;
    },
    setEmail(state, email) {
      state.signUpForm.email = email;
    },
    setPassword(state, password) {
      state.signUpForm.password = password;
    }
  }
};

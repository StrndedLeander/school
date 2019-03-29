import Vue from "vue";
import Vuex from "vuex";
import students from "../serverInterface/routes/students.routes";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    students: []
  },
  getters: {},
  actions: {
    getStudents() {
      students.getStudents().then(res => {
        console.log(res);
      });
    }
  },
  mutations: {
    setStudents(state, students) {
      state.students = students;
    }
  }
};

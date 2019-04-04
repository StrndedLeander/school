import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import StudentsModule from './store/modules/students/student';
import AuthModule from './store/modules/auth';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    StudentsModule,
    AuthModule
  }
};

export default new Vuex.Store<RootState>(store);

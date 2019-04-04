import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from 'src/store';

@Module({ dynamic: true, store: store, name: 'user'})
export default class User extends VuexModule {}

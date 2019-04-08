import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import { Login } from '../../interfaces/users/Login.interface';
import { Register } from '../../interfaces/users/Register.interface';
import store from '@/store';
import { AuthReqs } from '../../serverReqs/authReqs';

@Module({ namespaced: true, name: 'auth', store })
export default class AuthModule extends VuexModule {
  reqs: AuthReqs = new AuthReqs();
  private login: Login = { username: '', password: '' };
  private register: Register = {
    name: '',
    username: '',
    email: '',
    password: ''
  };

  @Action
  signIn() {
    this.reqs.signIn().then((res) => {
      console.log(res);
    });
  }

  @Mutation
  public setUsernameLogin(username: string) {
    this.login.username = username;
  }

  @Mutation
  public setPasswordLogin(password: string) {
    this.login.password = password;
  }
  @Mutation
  public setUsernameRegister(username: string) {
    this.register.username = username;
  }

  @Mutation
  public setPasswordRegister(password: string) {
    this.register.password = password;
  }
  @Mutation
  public setNameRegister(name: string) {
    this.register.name = name;
  }

  @Mutation
  public setEmailRegister(email: string) {
    this.register.email = email;
  }
}

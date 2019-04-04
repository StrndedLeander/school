import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Login } from '../../interfaces/users/Login.interface';
import { Register } from '../../interfaces/users/Register.interface';
import store from 'src/store';

@Module({ dynamic: true, store: store, name: 'auth' })
export default class Auth extends VuexModule {
  private login: Login = { username: '', password: '' };
  private register: Register = {
    name: '',
    username: '',
    email: '',
    password: ''
  };

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

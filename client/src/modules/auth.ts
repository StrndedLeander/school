import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { SignIn } from "../interfaces/users/signIn.interface";
import { SignUp } from "../interfaces/users/signUp.interface";

@Module
export default class Auth extends VuexModule {
  signIn: SignIn = { username: "", password: "" };
  signUp: SignUp = { name: "", username: "", email: "", password: "" };

  @Mutation
  setUsernameSignIn(username: string) {
    this.signIn.username = username;
  }

  @Mutation
  setPasswordSignIn(password: string) {
    this.signIn.password = password;
  }
  @Mutation
  setUsernameSignUp(username: string) {
    this.signUp.username = username;
  }

  @Mutation
  setPasswordSignUp(password: string) {
    this.signUp.password = password;
  }
  @Mutation
  setNameSignUp(name: string) {
    this.signUp.name = name;
  }

  @Mutation
  setEmailSignUp(email: string) {
    this.signUp.email = email;
  }
}

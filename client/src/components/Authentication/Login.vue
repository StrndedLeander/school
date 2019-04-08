<template>
  <div class="signIn hero">
    <div class="field">
      <label class="label is-pulled-left">Username or E-Mail</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <input class="input" type="text" placeholder="Enter Username">
      </div>
    </div>

    <div class="field">
      <label class="label is-pulled-left">Password</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <input class="input" type="password" :value="password" placeholder="Enter Password">
      </div>
    </div>

    <div class="field">
      <div class="control centeredControl is-flex">
        <button class="button is-link">Login</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import auth from "../../store/modules/auth";

@Component({})
export default class Login extends Vue {
  username: string = "";
  password: string = "";

  login() {
    auth.signIn();
  }
}
</script>

<style scoped>
.centeredControl {
  margin: auto;
}
</style>

<template lang="html">
  <div v-if="isLogin">
    <Login></Login>
    <div class="field">
      <div class="control">
        <button class="button is-text" @click="toggleSignMethod">
          Don't have an account yet?
        </button>
      </div>
    </div>
    <div v-else>
      <Register></Register>
      <div class="field">
        <div class="control">
          <button class="button is-text" @click="toggleSignMethod">
            Already have an Account?
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
export default class SignUp extends Vue {
  components = {
    Login;
    Register;
  };
  isLogin: Boolean = true;

  toggleSignMethod(): void {
    if (this.isLogin == true) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }
}
</script>

<style lang="css" scoped></style>

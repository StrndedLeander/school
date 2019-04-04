<template lang="html">
<div class="sign">
  <div v-if="isLogin">
    <!-- <Login></Login> -->
    <div class="field">
      <div class="control">
        <button class="button is-text" @click="toggleSignMethod">
          Don't have an account yet?
        </button>
      </div>
    </div>
    </div>
    <div v-else>
      <!-- <Register></Register> -->
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
// import Login from "@/components/Authentication/Login";
// import Register from "@/components/Authentication/Register";

@Component({
  // components: {
  //   Login,
  //   Register
  // }
})
export default class Sign extends Vue {
  isLogin: boolean = true;

  toggleSignMethod() {
    if (this.isLogin == true) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }
}
</script>

<style lang="css" scoped></style>

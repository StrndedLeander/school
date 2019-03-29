<template>
  <div class="signUp">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Enter your name">
      </div>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <input class="input" type="text" placeholder="Choose an appropriate username">
      </div>
    </div>

    <div class="field">
      <label class="label">E-Mail Adress</label>
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Enter a valid E-Mail adress">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <input class="input" type="password" placeholder="Enter a secure password">
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the
          <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" @click="signUp">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {};
</script>

<style scoped>
</style>
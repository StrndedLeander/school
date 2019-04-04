<template>
  <div class="container">
    <input
      :value="studentID"
      @input="setID"
      class="input"
      type="text"
      placeholder="Enter a Student ID"
    >
    <button class="button is-success" :disabled="!studentID.isEmpty">Get Student</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import student from "../store/modules/student";
import InputType from "@types/dom-inputevent";

export default class GetStudent extends Vue {
  studentID: string = student.id;

  getStudent() {
    student.getStudent(this.studentID);
  }

  setID(e: InputType) {
    console.log(e);
  }
}
</script>
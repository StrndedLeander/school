<template>
  <div class="container">
    <input v-model="studentID" class="input" type="text" placeholder="Enter a Student ID">
    <button class="button is-success" :disabled="!studentID.isEmpty">Get Student</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import student from "../store/modules/students/student";

@Component({})
export default class GetStudent extends Vue {
  studentID: string = "";

  getStudent() {
    student.getStudent(this.studentID);
  }
}
</script>
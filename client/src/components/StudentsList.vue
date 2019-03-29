<template>
  <div class="students">
    <div class="list is-hoverable" v-for="student in students" :key="student.id">
      <a class="list-item">{{ student.name }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("students", {
      students: state => state.students
    })
  },
  methods: {
    ...mapActions("students", ["getStudents"])
  },
  created() {
    getStudents();
  }
};
</script>

<style scoped>
</style>
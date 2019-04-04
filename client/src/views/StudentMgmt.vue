<template>
  <GetStudent></GetStudent>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GetStudent from "@/components/GetStudent.vue";

@Component({
  components: { GetStudent }
})
export default class StudentMgmt extends Vue {}
</script>

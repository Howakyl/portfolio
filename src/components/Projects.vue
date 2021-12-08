<template>
  <section>
    <div class="container my-work-title">
      <h2 id="my-work" class="about-title">My Work</h2>
      <LineHeader />
    </div>
    <Project />
  </section>
</template>

<script>
import "~/assets/Projects.css";
import LineHeader from "./LineHeader.vue";
import Project from './Project.vue';
export default {
  components: {
    LineHeader, Project
  },
};
</script>

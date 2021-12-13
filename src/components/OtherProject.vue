<template>
  <div class="other-projects-folder">
    <div class="other-projects-header">
      <a :href="githubLink" target="_blank" class="other-link">
        <h4>
          {{ title }}
        </h4>
      </a>
      <div>
        <a :href="githubLink" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a v-if="visitLink" :href="visitLink" target="_blank">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
    <p>
      {{ description }}
    </p>
    <div class="techUsed-container">
      <p v-for="item in techUsed" :key="item">
        {{ item }}
        <Divider />
      </p>
    </div>
  </div>
</template>

<script>
import "~/assets/OtherProject.css";
import Divider from "./Divider.vue";

export default {
  components: {
    Divider,
  },
  props: {
    title: String,
    description: String,
    techUsed: Array,
    projectImage: String,
    githubLink: String,
    visitLink: String,
  },
};
</script>

<style></style>

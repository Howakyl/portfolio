<template>
  <div class="other-projects-folder">
    <div>
      <div class="other-projects-header">
        <a :href="githubLink" target="_blank" rel="noopener" class="other-link">
          <h4>
            {{ title }}
          </h4>
        </a>
        <div>
          <a
            @click="visitedRepo"
            v-if="githubLink"
            :href="githubLink"
            target="_blank"
            rel="noopener"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            @click="visitedSite"
            v-if="visitLink"
            :href="visitLink"
            target="_blank"
            rel="noopener"
          >
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="techUsed-container">
      <p v-for="item in techUsed" :key="item">
        <Divider v-if="item !== techUsed[0]" />
        {{ item }}
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
  methods: {
    visitedRepo() {
      this.$gtag.event("repo_visited", {
        name: `${this.title} repo`,
      });
    },
    visitedSite() {
      this.$gtag.event("site_visited", {
        name: `${this.title} site visited`,
      });
    },
  },
};
</script>

<style></style>

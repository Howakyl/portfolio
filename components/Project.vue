<template>
  <div class="container project-container">
    <Content :imageLink="visitLink" :imageSrc="projectImage" />
    <div>
      <div class="project-info">
        <div class="project-header">
          <h3 class="project-title">{{ title }}</h3>
          <LineHeader :maxSize="true" />
        </div>
        <div>
          <p>
            {{ description }}
          </p>
          <p v-if="credentials" class="project-credentials">
            <span>Credentials: </span> {{  credentials }}
          </p>
          <h5 class="tech-used">Technologies Used:</h5>
          <section class="tech-used-items">
            <p v-for="item in techUsed" :key="item">
              <Divider v-if="item !== techUsed[0]" />
              {{ item }}
            </p>
          </section>
          <div class="project-buttons-container">
            <div @click="visitedRepo">
              <Button
                v-if="githubLink"
                :content="'Repository'"
                class="github-link"
                :isLink="true"
                :blank="true"
                :href="githubLink"
              >
                <i
                  @click="visitedRepo"
                  class="fab fa-github gh-portfolio-btn"
                ></i>
              </Button>
            </div>
            <div @click="visitedSite">
              <Button
                class="site-link"
                :content="'Visit'"
                :isLink="true"
                :blank="true"
                :href="visitLink"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/Project.css";
export default {
  props: {
    title: String,
    description: String,
    techUsed: Array,
    projectImage: String,
    githubLink: String,
    visitLink: String,
    credentials: String
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

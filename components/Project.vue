<template>
  <div class="container project-container">
    <LazyContent :imageLink="visitLink" :imageSrc="projectImage" />
    <div>
      <div class="project-info">
        <div>
          <h3 class="project-title">{{ title }}</h3>
          <div class="line"></div>
        </div>
        <div>
          <p>
            {{ description }}
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

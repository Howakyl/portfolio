<template>
  <div class="container project-container">
    <Content :imageLink="visitLink" :imageSrc="projectImage" />
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
            <Button
              v-if="githubLink"
              :content="'Repository'"
              :isLink="true"
              :blank="true"
              :href="githubLink"
            >
              <i class="fab fa-github gh-portfolio-btn"></i>
            </Button>
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
</template>

<script>
import "~/assets/Project.css";
import Divider from "./Divider.vue";
import Content from "./Content.vue";
import Button from "./Button.vue";
export default {
  components: {
    Divider,
    Content,
    Button,
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

<template>
  <div class="social-nav-container">
    <ul class="social-nav">
      <li>
        <a
          @click="clickedGitlab"
          href="https://gitlab.com/Howakyl"
          target="_blank"
          rel="noopener"
        >
          <i class="fa-brands fa-gitlab"></i>
        </a>
      </li>
      <li>
        <a
          @click="clickedGithub"
          href="https://github.com/Howakyl"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a
          @click="clickedLinkedIn"
          href="https://www.linkedin.com/in/kyle-howard-b365841ab/"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import "~/assets/SocialNav.css";
export default {
  components: {  },
  methods: {
    clickedGithub() {
      this.$gtag.event("Github Visit");
    },
    clickedLinkedIn() {
      this.$gtag.event("LinkedIn Visit");
    },
    clickedGitlab() {
      this.$gtag.event("gitlab Visit");
    },
  },
};
</script>

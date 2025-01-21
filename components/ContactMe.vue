<template>
  <div id="contact" class="container contact-container">
    <h3>
      Contact me at:
      <a
        class="contact-link"
        href="mailto:howakyl@gmail.com"
        target="_blank"
        rel="noopener"
        @click="clickedEmail"
        >howakyl@gmail.com</a
      >
    </h3>
    <h4>
      My
      <a
        @click="clickedResume"
        class="contact-link"
        target="_blank"
        rel="noopener noreferrer"
        href="kyle-resume-7-24.pdf"
        >Resume</a
      >
    </h4>
    <div>
      <ul class="social-links">
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
            href="https://github.com/Howakyl"
            target="_blank"
            rel="noopener"
            @click="clickedGithub"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kyle-howard-b365841ab/"
            target="_blank"
            rel="noopener"
            @click="clickedLinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "~/assets/ContactMe.css";
export default {
  components: {},
  methods: {
    clickedGithub() {
      this.$gtag.event("Github Visit");
    },
    clickedLinkedIn() {
      this.$gtag.event("LinkedIn Visit");
    },
    clickedEmail() {
      this.$gtag.event("Email Visit");
    },
    clickedResume() {
      this.$gtag.event("Resume Visit");
    },
    clickedGitlab() {
      this.$gtag.event("gitlab Visit");
    },
  },
};
</script>

<style></style>

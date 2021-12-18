<template>
  <div id="contact" class="container contact-container">
    <h3>
      Contact me at:
      <a
        class="contact-link"
        href="mailto:howakyl@gmail.com"
        target="_blank"
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
        href="https://docs.google.com/document/d/1MAt_-fCumu1AE1B0IdEkoF5WKIZOSOue-u8qHDhUWug/edit?usp=sharing"
        >Resume</a
      >
    </h4>
    <div>
      <ul class="social-links">
        <li>
          <a
            href="https://github.com/Howakyl"
            target="_blank"
            @click="clickedGithub"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kyle-howard-b365841ab/"
            target="_blank"
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
  },
};
</script>

<style></style>

<template>
  <div class="project-container other-projects-container">
    <h3>Other Noteworthy Projects:</h3>
    <section class="other-projects">
      <OtherProject
        :githubLink="'https://github.com/Howakyl/repo-finder'"
        :title="'RepoFinder'"
        :description="'Search for any GitHub Organization, see recent pull requests, stars, and more.'"
        :visitLink="'https://repofinder.netlify.app/'"
        :techUsed="repoFinder"
      />
      <!-- <div class="other-projects-folder">
        <div class="other-projects-header">
          <a
            href="https://github.com/Howakyl/repo-finder"
            target="_blank"
            class="other-link"
          >
            <h4>RepoFinder</h4>
          </a>
          <div>
            <a href="https://github.com/Howakyl/repo-finder" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://repofinder.netlify.app/" target="_blank">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <p>
          Search for any GitHub Organization, see recent pull requests, stars,
          and more.
        </p>
        <p>
          React <span class="divider">|</span> Javascript
          <span class="divider">|</span> CSS3
          <span class="divider">|</span> HTML5
        </p>
      </div> -->

      <div class="other-projects-folder">
        <div class="d-flex other-projects-header">
          <a
            href="https://github.com/Howakyl/sms-bot"
            target="_blank"
            class="other-link"
          >
            <h4>SMS Bot</h4>
          </a>
          <div>
            <a href="https://github.com/Howakyl/sms-bot" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p>
          Utilize Twilio's API to text the bot and recieve some cat pictures,
          and inspirational quotes!
        </p>
        <p>
          Python <span class="divider">|</span> Flask
          <span class="divider">|</span> Twilio
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import "~/assets/OtherProjects.css";
import LineHeader from "./LineHeader.vue";
import OtherProject from "./OtherProject.vue";
export default {
  components: {
    LineHeader,
    OtherProject,
  },
  data() {
    return {
      repoFinder: [
        'React',
        'Javascript',
        'CSS3',
        'HTML5'
      ],
    };
  },
};
</script>

<style></style>

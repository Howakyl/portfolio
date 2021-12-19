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
      <OtherProject
        :githubLink="'https://github.com/Howakyl/sms-bot'"
        :title="'SMS Bot'"
        :description="`Utilize Twilio's API to text the bot and recieve some cat pictures,and inspirational quotes!`"
        :techUsed="smsBot"
      />
      <OtherProject
        :title="'eFinalDate'"
        :description="`Built with the team at XLR8, eFinalDate simplifies the monument making process. By utilizing the ''MagicCard'' to eliminate the need for messy rubbings. Just take a photo with the card, and the image is sized and aligned perfectly for your editing software!`"
        :techUsed="eFinalDate"
      />
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
      repoFinder: ["React", "Javascript", "CSS3", "HTML5"],
      smsBot: ["Python", "Flask", "Twilio"],
      eFinalDate: ["Vue", "Nuxt.js", "AWS", "Tailwind.css"]
    };
  },
};
</script>

<style></style>

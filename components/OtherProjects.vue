<template>
  <div class="project-container other-projects-container">
    <h3>Other Noteworthy Projects:</h3>
    <section class="other-projects">
      <OtherProject
        :title="'myTrax'"
        :description="'Create, share, and listen to your own custom song (and video) playlists all in one place, on myTrax! By utilizing YouTube or Spotify APIs, users can listen to, upload, create, and delete playlists.'"
        :techUsed="myTraxTech"
        :visitLink="'https://enigmatic-cliffs-18729.herokuapp.com/'"
        :githubLink="'https://github.com/Howakyl/myTrax'"
      />
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
        :visitLink="'https://pages.git.generalassemb.ly/Howakyl96/project-0-tomagotchi/'"
        :githubLink="'https://github.com/Howakyl/Tamagotchi-Life'"
        :title="'Tamagotchi'"
        :description="'A browser game based on the 1996 hit handheld game! Take care of your pet, by feeding, playing, and letting them rest.'"
        :techUsed="tamagotchiTech"
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
      tamagotchiTech: ["jQuery", "Typescript", "CSS3", "HTML5"],
      myTraxTech: [
        "Node",
        // "Express",
        "MongoDB",
        "EJS",
        "Javascript",
        "Heroku",
        "Bootstrap",
        // "CSS3",
        // "HTML5",
      ],
      trapdoorTech: ["React", "Node", "AWS", "Firebase"],
      trapdoorDescription:
        "In collaboration with the XLR8 Team and Trapdoor Creative, I created an in-browser file explorer/uploader for users 3D assets, as well as overhauling Trapdoor's account management pages.",
    };
  },
};
</script>

<style></style>

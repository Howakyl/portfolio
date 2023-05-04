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
        :title="'Wayfarer'"
        :description="`Built with my classmates at General Assembly, Wayfarer is a travel app where users can create profiles, make posts showing off their favorite travel destinations, and comment on other users' posts.`"
        :techUsed="wayfarerTech"
        :visitLink="'http://wayfarer-kemt.herokuapp.com/'"
        :githubLink="'https://github.com/Howakyl/wayfarer'"
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
      wayfarerTech: [
        "Python",
        "Django",
        "PostgreSQL",
        // "Heroku",
        "Javascript",
        "Materialize",
        // "CSS3",
        // "HTML5",
      ],
    };
  },
};
</script>

<style></style>

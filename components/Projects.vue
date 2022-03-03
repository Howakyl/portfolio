<template>
  <section>
    <div class="container my-work-title">
      <h2 id="my-work" class="about-title">My Work</h2>
      <LineHeader />
    </div>
    <Project
      :title="'Cheerlending'"
      :description="'Cheerlending is an app made to help California residents find a lower interest rate on their mortgage. I was focused on the frontend features of this project along with the team at XLR8, as well as creating and managing analytics features for our client.'"
      :techUsed="cheerlendingTech"
      :projectImage="'cheerlending.webP'"
      :visitLink="'https://alpha.californiaratereduction.com/onboarding'"
    />
    <Project
      :title="'Fishily'"
      :description="'Fishily is an app made to help new fishermen find places to catch fish, and for experienced anglers to show off their catches. Users can create profiles, upload posts with optional coordinates, and leave comments.'"
      :techUsed="fishilyTech"
      :projectImage="'fishily-map.png'"
      :visitLink="'https://fishily.netlify.app/'"
      :githubLink="'https://github.com/Howakyl/fishily-client'"
    />
    <Project
      :title="'Wayfarer'"
      :description="`Wayfarer is a travel app where users can create profiles, make posts showing off their favorite travel destinations, and comment on other users' posts. Full CRUD on Users, Posts, and Comments.`"
      :techUsed="wayfarerTech"
      :projectImage="'wayfarer.png'"
      :visitLink="'http://wayfarer-kemt.herokuapp.com/'"
      :githubLink="'https://github.com/Howakyl/wayfarer'"
    />
    <Project
      :title="'myTrax'"
      :description="'Create, share, and listen to your own custom song (and video) playlists all in one place, on myTrax! By utilzing YouTube or Spotify APIs, users can listen to, upload, create, and delete playlists.'"
      :techUsed="myTraxTech"
      :projectImage="'myTrax.png'"
      :visitLink="'https://enigmatic-cliffs-18729.herokuapp.com/'"
      :githubLink="'https://github.com/Howakyl/myTrax'"
    />
    <Project
      :title="'Tamagotchi'"
      :description="'A browser game based on the 1996 hit handheld game! Take care of your pet, by feeding, playing, and letting them rest.'"
      :techUsed="tamagotchiTech"
      :projectImage="'Tamagotchi.webP'"
      :visitLink="'https://pages.git.generalassemb.ly/Howakyl96/project-0-tomagotchi/'"
      :githubLink="'https://github.com/Howakyl/Tamagotchi-Life'"
    />
  </section>
</template>

<script>
import "~/assets/Projects.css";
import LineHeader from "./LineHeader.vue";
import Project from "./Project.vue";
export default {
  components: {
    LineHeader,
    Project,
  },
  data() {
    return {
      cheerlendingTech: [
        "React",
        "Django",
        "Python",
        "Firebase",
        "Sass",
        "Google Analytics",
        "HTML5"
      ],
      fishilyTech: [
        "React",
        "Typescript",
        "MongoDB",
        "Express",
        "Node.js",
        "Axios",
        "MapBox",
        "REST API",
        "Heroku",
        "Javascript",
        "Bootstrap",
        "CSS3",
        "HTML5",
      ],
      wayfarerTech: [
        "Python",
        "Django",
        "postgreSQL",
        "Heroku",
        "Javascript",
        "Materialize",
        "CSS3",
        "HTML5",
      ],
      myTraxTech: [
        "Node.js",
        "Express",
        "MongoDB",
        "EJS",
        "Javascript",
        "Heroku",
        "Bootstrap",
        "CSS3",
        "HTML5",
      ],
      tamagotchiTech: ["jQuery", "Typescript", "CSS3", "HTML5"],
    };
  },
};
</script>

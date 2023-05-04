<template>
  <section class="projects-wrapper">
    <div class="container my-work-title">
      <h2 id="my-work" class="about-title">My Work</h2>
      <LineHeader />
    </div>
    <div class="projects-container">
      <Project
        :title="'Story Tyke'"
        :description="storyTykeDescription"
        :techUsed="storyTykeTech"
        :projectImage="'storyTyke2.png'"
        :visitLink="'https://play.google.com/store/apps/details?id=com.storytyke.storytykeandroid&hl=en_US&gl=US'"
      />
      <Project
        :title="'Trapdoor Creative'"
        :description="trapdoorDescription"
        :techUsed="trapdoorTech"
        :projectImage="'trapdoor.png'"
        :visitLink="'https://www.trapdoorcreative.com/'"
      />
      <Project
        :title="'eFinalDate'"
        :description="`Built with the team at XLR8, eFinalDate simplifies the monument making process. By utilizing the ''MagicCard'' to eliminate the need for messy rubbings. Just take a photo with the card, and the image is sized and aligned perfectly for your editing software! I managed the creation of the Nuxt.js frontend, and the iOS companion app.`"
        :techUsed="eFinalDate"
        :projectImage="'efd3.png'"
        :visitLink="'https://alpha-efinaldate.netlify.app/'"
      />
      <Project
        :title="'Cheerlending'"
        :description="'Cheerlending is an app made to help California residents find a lower interest rate on their mortgage. I was focused on the frontend features of this project along with the team at XLR8, as well as creating and managing analytics features for our client.'"
        :techUsed="cheerlendingTech"
        :projectImage="'cheerlending.webP'"
        :visitLink="'https://alpha.californiaratereduction.com/onboarding'"
      />
      <Project
        v-if="showMore"
        :title="'Fishily'"
        :description="'Fishily is a personal project made to help new fishermen find places to catch fish, and for experienced anglers to show off their catches. Users can create profiles, upload posts with optional coordinates, and leave comments.'"
        :techUsed="fishilyTech"
        :projectImage="'fishily-map.png'"
        :visitLink="'https://fishily.netlify.app/'"
        :githubLink="'https://github.com/Howakyl/fishily-client'"
      />
    </div>

    <Button
      class="site-link showmore-btn"
      :content="showMore ? 'Show Less' : 'Show More'"
      :onClick="toggleShowMore"
    />
  </section>
</template>

<script>
// TODO - PROJECTS TO ADD:
// Pixingo
// Tiered System Support
import "~/assets/Projects.css";
import LineHeader from "./LineHeader.vue";
import Project from "./Project.vue";
import Button from "./Button.vue";
export default {
  components: {
    LineHeader,
    Project,
    Button,
  },
  data() {
    return {
      showMore: false,
      cheerlendingTech: [
        "React",
        "Django",
        "Python",
        "Firebase",
        "Sass",
        "Google Analytics",
        "HTML5",
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
      tamagotchiTech: ["jQuery", "Typescript", "CSS3", "HTML5"],
      eFinalDate: ["Vue", "Nuxt.js", "Swift", "AWS", "Tailwind.css"],
      storyTykeTech: ["Java", "Firebase", "Django", "Python"],
      trapdoorTech: ["React", "Node.js", "AWS", "Firebase"],
      trapdoorDescription:
        "In collaboration with the XLR8 Team and Trapdoor Creative, I created an in-browser file explorer/uploader for user's 3D assets, as well as overhauling Trapdoor Creative's account management page.",
      storyTykeDescription: `The Story Tyke android app provides bedtime stories for your children in text, picture, and audio formats! 
      With the XLR8 team I oversaw project planning, creation of UI elements, audiobook features, payment integration, and API implementation.`,
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
      console.log(this.showMore);
    },
  },
};
</script>

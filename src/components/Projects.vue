<template>
  <section>
    <div class="container my-work-title">
      <h2 id="my-work" class="about-title">My Work</h2>
      <LineHeader />
    </div>
    <Project
      :title="'Fishily'"
      :description="'Fishily is an app made to help new fishermen find places to catch fish, and for experienced anglers to show off their catches. Users can create profiles, upload posts with optional coordinates, and leave comments.'"
      :techUsed="fishilyTech"
      :projectImage="'fishily-map.png'"
      :visitLink="'https://fishily.netlify.app/'"
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
    };
  },
};
</script>

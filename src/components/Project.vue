<template>
  <div class="d-flex project-container">
    <Content />
    <div>
      <div class="project-info">
        <div>
          <h3 class="project-title"><span>F</span>ishily</h3>
          <div class="line"></div>
        </div>
        <div>
          <p>
            Fishily is an app made to help new fishermen find places to catch
            fish, and for experienced anglers to show off their catches. Users
            can create profiles, upload posts with optional coordinates, and
            leave comments.
          </p>
          <h5 class="tech-used">Technologies Used:</h5>
          <p>
            React <Divider /> Typescript <Divider /> MongoDB <Divider /> Express
            <Divider /> Node.js <Divider /> Axios <Divider /> MapBox
            <Divider /> REST API <Divider /> Heroku <Divider /> Javascript
            <Divider /> Bootstrap <Divider /> CSS3 <Divider /> HTML5
          </p>
          <div>
            <Button>
              <a
                href="https://github.com/Howakyl/fishily-client"
                target="_blank"
                ><i class="fab fa-github gh-portfolio-btn"></i>Respository</a
              >
            </Button>
            <Button>
              <a href="https://fishily.netlify.app/" target="_zero">Visit</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/Project.css";
import Divider from "./Divider.vue";
import Content from "./Content.vue";
import Button from "./Button.vue";
export default {
  components: {
    Divider,
    Content,
    Button,
  },
};
</script>

<template>
  <article class="about-article container">
    <div>
      <h2 class="about-title">About Me</h2>
      <div class="line"></div>
    </div>
    <section class="about-info">
      <div class="about-info-text">
        <p>
          Hi there! My name is Kyle, and I'm a software engineer based out of
          Seattle, Washington! I am proficient in technologies such as:
          JavaScript, React, Vue, Node.js, Python, Django, SQL/noSQL, and more.
        </p>
        <p>
          I have a passion for building websites and applications from the
          ground up, and curating them into a functional and visually appealing
          experience.
        </p>
        <p>
          My main focus lately has been developing accessible, exciting software
          solutions at XLR8 Development, for a variety of clients.
        </p>
        <p>
          Although I spend much of my time coding, I also have a passion for
          music and playing my bass guitar. Whenever I get stuck on a
          challenging project, nothing helps me focus more than playing some
          smooth bass lines to clear my head!
        </p>
      </div>
      <Content :imageSrc="'me.png'" class="me-img-div" />
    </section>
  </article>
</template>

<script>
import "~/assets/AboutMe.css";
import Divider from "./Divider.vue";
import Content from "./Content.vue";
export default {
  components: { Content, Divider },
};
</script>

<style></style>

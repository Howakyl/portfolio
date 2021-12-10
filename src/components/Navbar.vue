<template>
  <nav id="sideNav">
    <a href="#" class="home nav-link">
      <Home />
      <span class="hide">Home</span>
    </a>
    <a href="#my-work" class="my-work nav-link">
      <Code />
      <span class="hide">Projects</span>
    </a>
    <a href="#about" class="about nav-link">
      <Person />
      <span class="hide">About</span>
    </a>
    <a href="#contact" class="contact nav-link">
      <Mail />
      <span class="hide">Contact</span>
    </a>
  </nav>
</template>

<script>
import "~/assets/Navbar.css";
import Home from "../components/svg/Home.vue";
import Code from "../components/svg/Code.vue";
import Person from "../components/svg/Person.vue";
import Mail from "../components/svg/Mail.vue";
export default {
  components: {
    Home,
    Code,
    Person,
    Mail
  },
};
</script>

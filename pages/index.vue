<template>
  <main>
    <Navbar />
    <SocialNav />
    <div class="entire-container">
      <ThemeToggle />
      <Hero />
      <AboutMe />
      <Projects />
      <OtherProjects />
      <Skills />
      <ContactMe />
    </div>
  </main>
</template>

<script>
import "~/assets/index.css";
export default {
  methods: {
    enterPage () {
      this.$gtag.event('enter')
    }
  },
  mounted() {
    this.enterPage();
  }
};
</script>
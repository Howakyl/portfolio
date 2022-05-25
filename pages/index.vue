<template>
  <main>
    <LazyNavbar />
    <LazySocialNav />
    <div class="entire-container">
      <LazyThemeToggle />
      <LazyHero />
      <LazyAboutMe />
      <LazyProjects />
      <LazyOtherProjects />
      <LazySkills />
      <LazyContactMe />
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
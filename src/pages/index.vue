<template>
  <main>
    <Hero />
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
};
</script>

<style>
  :root {
    --primary-color: #ededed;
    --secondary-color: #2e2d2d;
    --main-accent: #295ea4;
    --secondary-accent: #f0a32f;
    --text-accent: #4d4d4d;
    --title-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  [data-theme="dark"] {
    --primary-color: #1b1b1b;
    --secondary-color: #EDEDED;
    --main-accent: #2b62aa;
    --secondary-accent: #F0A32F;
    --text-accent: #c5c5c5;
}

* {
    box-sizing: border-box;
    margin: 0;
}

body {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-family: 'Open Sans' , sans-serif;
    min-height: 100vh;
    transition: background .3s linear;
}
</style>

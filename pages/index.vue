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

<style>
:root {
  --primary-color: #d9dbf1;
  --secondary-color: #0e273c;
  --main-accent: #4a306d;
  --secondary-accent: #a167a5;
  --text-accent: #2978A0;
  /* --primary-color: #ededed;
  --secondary-color: #2e2d2d;
  --main-accent: #295ea4;
  --secondary-accent: #f0a32f;
  --text-accent: #4d4d4d; */
  --title-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}


/* 
0e273c prussian blue
4a306d spanish violet
a167a5 pearly urple
D9DBF1 lavender web
CBE896 yellow green
*/

/* [data-theme="dark"] {
  --primary-color: #1b1b1b;
  --secondary-color: #ededed;
  --main-accent: #2b62aa;
  --secondary-accent: #f0a32f;
  --text-accent: #c5c5c5;
} */
[data-theme="dark"] {
  --primary-color: #0e273c;
  --secondary-color: #d9dbf1;
  --main-accent: #a167a5;
  --secondary-accent: #cbe896;
  --text-accent: #4a306d;
}

* {
  box-sizing: border-box;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  width: 100%;
}

body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  transition: background 0.3s linear;
}

svg {
  font-size: 25px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}

@media (max-width: 620px) {
  .entire-container {
    margin-left: 2.2rem;
    margin-right:.5rem;
}
}
</style>

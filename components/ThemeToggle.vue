<template>
  <div class="theme-switch-wrapper night-theme" id="slide">
    <label class="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <i class="fas fa-moon theme-icon"></i>
    </label>
  </div>
</template>

<script>
import "~/assets/ThemeToggle.css";
export default {
  data() {
    return {};
  },
  methods: {
    toggleTheme() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      const themeIcon = document.querySelector(".theme-icon");
      const currentTheme = localStorage.getItem("theme");

      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
          toggleSwitch.checked = true;
        }
      }

      function switchTheme(e) {
        if (e.target.checked) {
          document.documentElement.setAttribute("data-theme", "dark");
          themeIcon.removeAttribute("class");
          themeIcon.setAttribute("class", "fas fa-sun");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
          themeIcon.removeAttribute("class");
          themeIcon.setAttribute("class", "fas fa-moon");
          localStorage.setItem("theme", "light");
        }
      }

      toggleSwitch.addEventListener("change", switchTheme, false);
    },
  },
  mounted() {
    this.toggleTheme();
  },
};
</script>

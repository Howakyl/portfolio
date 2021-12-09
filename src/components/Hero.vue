<template>
  <section class="home-bg">
    <article class="text-zone">
      <p class="h1-accent accent-1"><span>Hi</span>, my name is</p>
      <h1 id="typeOutName">
        <span>K</span>yle <span>H</span>oward<span class="h1-period">.</span>
      </h1>
      <p class="h1-accent accent-2">
        <span class="slashes">// </span>
        <span class="typeText h1-accent"></span>
      </p>
      <Button
      :content="'Contact Me!'"
      :isLink="true"
      :href="'#contact'"
      >
      </Button>
    </article>
    <ArrowIcon />
  </section>
</template>

<script>
import "~/assets/Hero.css";
import Button from "./Button.vue";
import ArrowIcon from './ArrowIcon.vue'
export default {
  components: { Button, ArrowIcon },
  data() {
    return {
      textToBeTyped: [
        "Software Engineer",
        "Full-Stack Web Developer",
        "Problem Solver",
      ],
      index: 0,
      isAdding: true,
      textIndex: 0,
    };
  },
  methods: {
    playAnimation() {
      let typeText = document.querySelector(".typeText");
      setTimeout(
        () => {
          typeText.innerText = this.textToBeTyped[this.textIndex].slice(
            0,
            this.index
          );
          if (this.isAdding) {
            if (this.index > this.textToBeTyped[this.textIndex].length) {
              // no more text to add
              this.isAdding = false;
              // wait 2 seconds before playing again
              typeText.classList.add("showAnim");
              setTimeout(() => {
                typeText.classList.remove("showAnim");
                this.playAnimation();
              }, 2000);
              return;
            } else {
              this.index++;
            }
          } else {
            // remove text
            if (this.index === 0) {
              // no more text to remove
              this.isAdding = true;
              this.textIndex = (this.textIndex + 1) % this.textToBeTyped.length;
            } else {
              this.index--;
            }
          }
          // playAnimation calls itself every 120ms
          this.playAnimation();
        },
        this.isAdding ? 120 : 60
      );
    },
  },
  mounted() {
    this.playAnimation();
  },
};
</script>

<style scoped></style>

<template>
  <div class="img-div">
    <a :href="imageLink" target="_blank" rel="noopener">
      <img
        v-if="imageSrc"
        :src="require(`~/static/images/${imageSrc}`)"
        :alt="imageSrc"
      />
    </a>
    <div class="img-border"></div>
  </div>
</template>

<script>
import "~/assets/Content.css";
export default {
  props: {
    imageSrc: String,
    imageLink: String,
  },
};
</script>

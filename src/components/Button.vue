<template>
  <div class="button">
    <button v-if="!isLink" type="button" class="btn">
      <slot />
      {{ content }}
    </button>
    <a
      v-else
      :href="href"
      class="btn contact-button"
      :target="blank ? '_blank' : ''"
      ><slot />{{ content }}</a
    >
  </div>
</template>

<script>
import "~/assets/Button.css";
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    isLink: {
      default: false,
      type: Boolean,
    },
    href: {
      type: String,
    },
    blank: {
      type: Boolean,
    },
  },
};
</script>

<style></style>

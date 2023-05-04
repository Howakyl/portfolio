<template>
  <div class="button">
    <button v-if="!isLink" type="button" class="btn" @click="onClick">
      <slot />
      {{ content }}
    </button>
    <a
      v-else
      :href="href"
      class="btn contact-button"
      :target="blank ? '_blank' : ''"
      :rel="blank ? 'noopener': ''"
      ><slot />{{ content }}</a
    >
      <!-- rel="noopener" -->
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
    onClick: {
      type: Function,
      default: () => {}
    }
  },
};
</script>

<style></style>

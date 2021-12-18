<template>
  <div class="tooltip-container">
    <slot />
    <span class="tooltip-text">{{ tooltipText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tooltipText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>

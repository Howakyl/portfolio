<template>
  <div v-if="maxSize" class="line-container">
    <!-- this empty div is necessary for positioning the line -->
    <div></div>
    <div class="line"></div>
  </div>
  <div v-else class="line"></div>
</template>

<script>
import "~/assets/LineHeader.css";
export default {

props: {
  maxSize: Boolean
}
};
</script>
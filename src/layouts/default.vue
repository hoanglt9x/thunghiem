<template>
  <nav-bar></nav-bar>
  <slot> </slot>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>

<template>
  <component :is="layoutId">
    <router-view></router-view>
  </component>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  setup() {
    const route = useRoute();
    // console.log(route);
    return { layoutId: computed(() => route.meta.layout || PUBLIC_LAYOUT) };
  },
};
</script>

<style lang="css" scoped></style>

<template>
  <navbar-brand></navbar-brand>
  <slot> </slot>
</template>

<script>
import NavbarBrand from "@/components/common/NavbarBrand.vue";
export default {
  components: {
    NavbarBrand,
  },
};
</script>

<template>
  <div class="home">
    <table-data></table-data>
  </div>
</template>

<script>
// @ is an alias to /src
import TableData from "@/components/base/TableData.vue";

export default {
  name: "Home",
  components: {
    TableData,
  },
};
</script>

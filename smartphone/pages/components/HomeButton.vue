<template>
  <div id="homeButton" @click="changePageIndex('HomeScreen')"></div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import usePage from "../composables/usePage.js";

export default defineComponent({
  name: "HomeButton",
  components: {},
  setup(props, { emit }) {
    const { setPage } = usePage();

    function changePageIndex(index) {
      setPage(index);
    }

    return {
      changePageIndex,
    };
  },
});
</script>

<style>
</style>
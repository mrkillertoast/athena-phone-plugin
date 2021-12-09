<template>
  <div id="homeButton" @click="changePageIndex('Homescreen')"></div>
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
      console.log(index)
    }

    return {
      changePageIndex,
    };
  },
});
</script>

<style>
</style>
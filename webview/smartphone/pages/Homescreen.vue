<template>
  <!-- <body>
    <div id="smartphone"> -->
  <div id="homeScreen">
    <TopBar />
    <Apps />
    <HotBar />
    <HomeButton />
  </div>
  <!-- </div>
  </body>  -->
</template>

<script>
import TopBar from "./components/TopBar.vue";
import HotBar from "./components/HotBar.vue";
import HomeButton from "./components/HomeButton.vue";
import Apps from "./components/Apps.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Homescreen",
  components: {
    TopBar,
    HotBar,
    HomeButton,
    Apps,
  },
});
</script>

<style>
</style>
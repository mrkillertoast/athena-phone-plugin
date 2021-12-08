<template>
  <TopBar />
  <ul>
    <li>
      <div>Flugmodus</div>
      <div>
        <label class="switch">
          <input @click="toogleFlightMode" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </li>
    <li>Klingelton</li>
    <li>Lautstärke</li>
    <li>Hintergrund</li>
  </ul>
  <HomeButton />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import HomeButton from "./components/HomeButton.vue";
import TopBar from "./components/TopBar.vue";
import useFlightMode from "./composables/useFlightMode.js";

export default defineComponent({
  name: 'Settings',
  components: { HomeButton, TopBar },
  setup() {
    const { setFlightMode } = useFlightMode();
    let flightMode = false;

    function toogleFlightMode() {
      flightMode = !flightMode;
      setFlightMode(flightMode);
    }

    return { toogleFlightMode };
  },
});
</script>
<style>
</style>
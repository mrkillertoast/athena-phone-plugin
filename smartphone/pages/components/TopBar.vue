<template>
  <div id="notificationBar">
    <div class="notification-padding" id="clock">{{ time }}</div>
    <div class="notification-padding">T-Fone</div>
    <div id="notch">
      <div class="" id="cam"></div>
    </div>
    <div id=""></div>
    <div>
      <span @flightmode="setFlightmode">
        <span v-if="!currentFlightModeState">
          <span class="material-icons md-1"> signal_cellular_alt </span>
        </span>
        <span v-else>
          <span class="material-icons md-1"> flight </span>
        </span>
      </span>
      <span class="material-icons md-1"> battery_full </span>
    </div>
  </div>
</template>

<script>
import useFlightMode from "../composables/useFlightMode.js";

import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
  emits: ["flightmode"],
  setup() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    console.log(addZero());

    const { currentFlightModeState } = useFlightMode();

    async function addZero() {
      let i = today.getMinutes.toString();
      if (i < "10") {
        i = "0" + i;
      }
      return i;
    }

    return { time, currentFlightModeState };
  },
});
</script>

<style>
</style>
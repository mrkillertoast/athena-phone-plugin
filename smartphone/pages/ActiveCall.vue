<template>
  <TopBar />
  <div id="caller">{{ firstName }} {{ lastName }}</div>

  <hr />
  <div class="grid-3-1">
    <div class="item">
      <Icon size="3.5vw"><MicOffOutlined /></Icon>
    </div>
    <div class="item">
      <Icon size="3.5vw"><AddOutlined /></Icon>
    </div>

    <div class="item">
      <Icon size="3.5vw"><VolumeUpOutlined /></Icon>
    </div>
  </div>
  <div class="circle2 red bottom" @click="endCall">
    <Icon size="3.5vw"><CallEndOutlined /></Icon>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
// import {
//   MicOffOutlined,
//   AddOutlined,
//   VolumeUpOutlined,
//   CallEndOutlined,
// } from "@vicons/material";
// import { Icon } from "@vicons/utils";

import { defineComponent } from "vue";
export default defineComponent({
  name: "ActiveCall",
  components: {
    TopBar,
    Icon,
    MicOffOutlined,
    AddOutlined,
    VolumeUpOutlined,
    CallEndOutlined,
  },
  setup() {
    let firstName = "Frank";
    let lastName = "Bahwawa Conner";
    const router = useRouter();

    function endCall() {
      router.push({ name: "Home" });
    }

    return { firstName, lastName, endCall };
  },
});
</script>

<style>
</style>
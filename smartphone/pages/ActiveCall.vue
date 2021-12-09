<template>
  <TopBar />
  <div id="caller">{{ firstName }} {{ lastName }}</div>

  <hr />
  <div class="grid-3-1">
    <div class="item">
      <span class="material-icons md-35">
        mic_off
      </span>
    </div>
    <div class="item">
      <span class="material-icons md-35">
        add
      </span>
    </div>

    <div class="item">
      <span class="material-icons md-35">
        volume_up
      </span>
    </div>
  </div>
  <div class="circle2 red bottom" @click="endCall">
    <span class="material-icons md-35">
      call_end
    </span>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import usePage from './composables/usePage.js'

import { defineComponent } from "vue";
export default defineComponent({
  name: "ActiveCall",
  components: {
    TopBar,
    
  },
  setup() {
    let firstName = "Frank";
    let lastName = "Bahwawa Conner";

    const { setPage } = usePage();

    function endCall() { 
      setPage('HomeScreen');
    }

    return { firstName, lastName, endCall };
  },
});
</script>

<style>
</style>
<template>
  <TopBar />
  <div></div>
  <div>
    <div class="input">
      <input type="text" class="inputLine font-3 center" :value="value" />
    </div>
    <div class="test">
      <div class="grid-3-3">
        <div class="circle hoverEffect" @click="value = value + 1">
          <span class="center">1</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 2">
          <span class="center">2</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 3">
          <span class="center">3</span>
        </div>

        <div class="circle hoverEffect" @click="value = value + 4">
          <span class="center">4</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 5">
          <span class="center">5</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 6">
          <span class="center">6</span>
        </div>

        <div class="circle hoverEffect" @click="value = value + 7">
          <span class="center">7</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 8">
          <span class="center">8</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 9">
          <span class="center">9</span>
        </div>

        <div class="circle hoverEffect" @click="value = value + '*'">
          <span class="center">*</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + 0">
          <span class="center">0</span>
        </div>
        <div class="circle hoverEffect" @click="value = value + '#'">
          <span class="center">#</span>
        </div>
      </div>
    </div>
    <div class="dial center">
      Anrufen
      </div>
  </div>
  <HomeButton />
</template>

<script>
import TopBar from "./components/TopBar.vue";
import HomeButton from "./components/HomeButton.vue";
import { defineComponent, ref } from "vue";


export default defineComponent({
  name: 'DialScreen',
  components: { TopBar, HomeButton },
  setup() {
    const value = ref("");

    return { value };
  },
});
</script>

<style>
</style>
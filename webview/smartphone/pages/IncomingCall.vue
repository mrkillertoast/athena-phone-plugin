<template>
  <TopBar />
  <div class="" id="caller">{{ firstName }} {{ lastName }}</div>
  <ContactImage :contactFirstName="firstName" :contactLastName="lastName" />
  <div class="bottom padding-bottom-2vw">
    <div class="grid-2-1">
      <div class="circle2 green">
          <span class="material-icons md-35">
            call
          </span>
      </div>
      <div class="circle2 red">
        <span class="material-icons md-35">
          call_end
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ContactImage from "./components/ContactImage.vue";
import TopBar from "./components/TopBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IncomingCall",
  components: {
    ContactImage,
    TopBar,
  },
  setup() {
    let firstName = "Frank";
    let lastName = "Bahwawa Conner";

    return { firstName, lastName };
  },
});
</script>

<style>
</style>
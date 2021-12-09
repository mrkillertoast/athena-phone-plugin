<template>
  <div id="hotBar">
    <div class="app" id="appPhoneButton" @click="changePageIndex(2)"></div>

    <div
      class="app"
      id="appContactsButton"
      @click="changePageIndex('Contacts')"
    >
      <!-- <MenuBookSharp /> -->
    </div>
    <div class="app" id="appMessagesButton"></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import usePage from "../composables/usePage.js";

export default defineComponent({
  name: "HotBar",
  components: {},
  setup(props, { emit }) {
    const { setPage } = usePage();

    function changePageIndex(index) {
      setPage(index);
      console.log(index);
    }

    return {
      changePageIndex,
    };
  },
});
</script>

<style>
</style>
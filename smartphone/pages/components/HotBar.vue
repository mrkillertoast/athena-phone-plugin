<template>
  <div id="hotBar">
    <div class="app" id="appPhoneButton" @click="changePageIndex('DialScreen')">
      <span class="material-icons md-2">
        call
      </span>
    </div>
      
    <div
      class="app"
      id="appContactsButton"
      @click="changePageIndex('Contacts')"
    >
      <span class="material-icons md-2">
        contacts
      </span>
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
  setup() {
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
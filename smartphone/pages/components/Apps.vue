<template>
  <div id="apps">
    <div class="app" id="appSettings" @click="changePageIndex('Settings')">
      <span class="material-icons md-2"> settings </span>
    </div>
    <div class="app" id="appBank">
      <!-- <Icon>
        <AttachMoneySharp />
      </Icon> -->
    </div>
    <div class="app" id="appAirplaneButton"></div>
  </div>
</template>

<script>
// import { SettingsTwotone, AttachMoneySharp } from "@vicons/material";
// import { Icon } from "@vicons/utils";
import usePage from "../composables/usePage.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Apps",
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
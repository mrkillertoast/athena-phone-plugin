<template>
  <TopBar />
  <div class="" id="caller">{{ firstName }} {{ lastName }}</div>
  <ContactImage :contactFirstName="firstName" :contactLastName="lastName" />
  <div class="bottom padding-bottom-2vw">
    <div class="grid-2-1">
      <div class="circle2 green">
        <Icon size="3vw"><LocalPhoneOutlined /></Icon>
      </div>
      <div class="circle2 red">
        <Icon size="3vw"><CallEndOutlined /></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import ContactImage from "../components/ContactImage";
import TopBar from "../components/TopBar";
import { LocalPhoneOutlined, CallEndOutlined } from "@vicons/material";
import { Icon } from "@vicons/utils";
export default {
  components: {
    ContactImage,
    TopBar,
    Icon,
    LocalPhoneOutlined,
    CallEndOutlined,
  },
  setup() {
    let firstName = "Frank";
    let lastName = "Bahwawa Conner";

    return { firstName, lastName };
  },
};
</script>

<style>
</style>
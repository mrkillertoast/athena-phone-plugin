<template>
  <TopBar />
  <div class="columns-3">
    <router-link class="routerlink" to="/contacts">
      <div class="" id="back">
        <Icon size="1.5vw">
          <ArrowBackSharp />
        </Icon>
      </div>
    </router-link>
    <div></div>
    <div class="align-right" @click="newContact">
      <Icon size="1.5vw">
        <SaveSharp />
      </Icon>
    </div>
  </div>
  <ContactInput
    v-model:firstName="firstName"
    v-model:lastName="lastName"
    v-model:phoneNumber="phoneNumber"
    :readonly="readonly"
  />
  <HomeButton />
</template>

<script>
//Components & Composables
import TopBar from "../components/TopBar";
import HomeButton from "../components/HomeButton";
import ContactInput from "../components/ContactInput";
import useContacts from "../composables/useContacts";

//ICONS
import { ArrowBackSharp, SaveSharp } from "@vicons/material";
import { Icon } from "@vicons/utils";

//Vue
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    TopBar,
    HomeButton,
    Icon,
    SaveSharp,
    ArrowBackSharp,
    ContactInput,
  },
  setup() {
    const router = useRouter();
    let firstName = ref("");
    let lastName = ref("");
    let phoneNumber = ref("");
    let readonly = false;

    const { saveContact } = useContacts();

    function newContact() {
      if (
        !firstName.value.length ||
        !lastName.value.length ||
        !phoneNumber.value.length
      ) {
        return;
      }
      saveContact(firstName, lastName, phoneNumber);
      router.push({ name: "Contacts" });
    }

    return { readonly, newContact, firstName, lastName, phoneNumber };
  },
};
</script>

<style>
</style>
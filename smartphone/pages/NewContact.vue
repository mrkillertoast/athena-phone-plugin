<template>
  <TopBar />
  <div class="columns-3">
    <div class="" id="back" @click="changePageIndex('Contacts')">
      <Icon size="1.5vw">
        <ArrowBackSharp />
      </Icon>
    </div>
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
import usePage from "./composables/usePage.js";

//ICONS
import { ArrowBackSharp, SaveSharp } from "@vicons/material";
import { Icon } from "@vicons/utils";

//Vue
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "NewContact",
  components: {
    TopBar,
    HomeButton,
    Icon,
    SaveSharp,
    ArrowBackSharp,
    ContactInput,
  },
  setup() {
    let firstName = ref("");
    let lastName = ref("");
    let phoneNumber = ref("");
    let readonly = false;

    const { saveContact } = useContacts();
    const { setPage } = usePage();

    function newContact() {
      if (
        !firstName.value.length ||
        !lastName.value.length ||
        !phoneNumber.value.length
      ) {
        return;
      }
      saveContact(firstName, lastName, phoneNumber);
      setPage("Contacts");
    }

    function changePageIndex(index) {
      setPage(index);
    }

    return { readonly, newContact, firstName, lastName, phoneNumber };
  },
});
</script>

<style>
</style>
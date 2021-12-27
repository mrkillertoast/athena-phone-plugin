<template>
  <TopBar />
  <div class="columns-3">
    <div class="" id="back" @click="changePageIndex('Contacts')">
      <span class="material-icons md-15">
        arrow_back
      </span>
    </div>
    <div></div>
    <div class="align-right" @click="newContact">
      <span class="material-icons md-15">
        save
      </span>
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
import TopBar from "./components/TopBar.vue";
import HomeButton from "./components/HomeButton.vue";
import ContactInput from "./components/ContactInput.vue";
import useContacts from "./composables/useContacts.js";
import usePage from "./composables/usePage.js";

//Vue
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "NewContact",
  components: {
    TopBar,
    HomeButton,
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
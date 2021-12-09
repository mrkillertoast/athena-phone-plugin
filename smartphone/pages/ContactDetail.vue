<template>
  <TopBar />

  <div class="columns-3">
    <div class="" id="back" @click="changePageIndex('Contacts')">
      <span class="material-icons md-15">
        arrow_back
      </span>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div v-if="!editMode"></div>
    <div class="align-right" v-if="editMode" @click="handleDelete">
      <span class="material-icons md-15">
        delete
      </span>
    </div>
    <div class="align-right" @click="toggleEditMode" v-if="!editMode">
      <span class="material-icons md-15">
        edit
      </span>
    </div>

    <div class="align-right" v-if="editMode" @click="saveContact">
      <span class="material-icons md-15">
        save
      </span>
    </div>
  </div>

  <ContactImage :contactFirstName="firstName" :contactLastName="lastName" />
  <div id="contactActions">
    <div class="hoverEffect">
      <span class="material-icons md-2">
        call
      </span>
    </div>
    <div class="hoverEffect">
      <span class="material-icons md-2">
        message
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
import TopBar from "./components/TopBar.vue";
import HomeButton from "./components/HomeButton.vue";
import ContactImage from "./components/ContactImage.vue";
import ContactInput from "./components/ContactInput.vue";

import useContacts from "./composables/useContacts.js";
import usePage from "./composables/usePage.js";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "ContactDetail",
  components: {
    TopBar,
    HomeButton,
    ContactImage,
    ContactInput,
  },
  props: ["id"],
  setup(props) {
    const { getContact, updateContact, deleteContact } = useContacts();
    const { setPage, currentProp } = usePage();
    let editMode = ref(false);
    let readonly = ref(true);
    const contact = getContact(currentProp);

    let firstName = ref(contact.firstName);
    let lastName = ref(contact.lastName);
    let phoneNumber = ref(contact.phoneNumber);

    function toggleEditMode() {
      editMode.value = !editMode.value;
      readonly.value = false;
    }

    function saveContact() {
      updateContact(contact.id, firstName, lastName, phoneNumber);
      readonly.value = true;
      editMode.value = false;
    }

    function handleDelete() {
      console.log(contact.id);
      deleteContact(contact.id);
      setPage("Contacts");
    }
    function changePageIndex(index) {
      setPage(index);
    }

    return {
      readonly,
      editMode,
      toggleEditMode,
      saveContact,
      firstName,
      lastName,
      phoneNumber,
      handleDelete,
      changePageIndex,
    };
  },
});
</script>

<style>
</style>
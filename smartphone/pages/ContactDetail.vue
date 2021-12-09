<template>
  <TopBar />

  <div class="columns-3">
    <div class="" id="back" @click="changePageIndex('Contacts')">
      <Icon size="1.5vw">
        <ArrowBackSharp />
      </Icon>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div v-if="!editMode"></div>
    <div class="align-right" v-if="editMode" @click="handleDelete">
      <Icon size="1.5vw"><DeleteFilled /></Icon>
    </div>
    <div class="align-right" @click="toggleEditMode" v-if="!editMode">
      <Icon size="1.5vw">
        <ModeEditOutlined />
      </Icon>
    </div>

    <div class="align-right" v-if="editMode" @click="saveContact">
      <Icon size="1.5vw">
        <SaveSharp />
      </Icon>
    </div>
  </div>

  <ContactImage :contactFirstName="firstName" :contactLastName="lastName" />
  <div id="contactActions">
    <div class="hoverEffect">
      <Icon size="2vw">
        <LocalPhoneSharp />
      </Icon>
    </div>
    <div class="hoverEffect">
      <Icon size="2vw">
        <MessageSharp />
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
import TopBar from "../components/TopBar";
import HomeButton from "../components/HomeButton";
import ContactImage from "../components/ContactImage";
import ContactInput from "../components/ContactInput";

import useContacts from "../composables/useContacts";
import usePage from "./composables/usePage.js";
import { ref, defineComponent } from "vue";

import {
  ArrowBackSharp,
  LocalPhoneSharp,
  MessageSharp,
  ModeEditOutlined,
  SaveSharp,
  DeleteFilled,
} from "@vicons/material";
import { Icon } from "@vicons/utils";

export default defineComponent({
  name: "ContactDetail",
  components: {
    TopBar,
    HomeButton,
    ContactImage,
    ArrowBackSharp,
    Icon,
    ContactInput,
    LocalPhoneSharp,
    MessageSharp,
    ModeEditOutlined,
    SaveSharp,
    DeleteFilled,
  },
  props: ["id"],
  setup(props) {
    const { getContact, updateContact, deleteContact } = useContacts();
    const { setPage } = usePage();
    let editMode = ref(false);
    let readonly = ref(true);
    const contact = getContact(props.id);

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
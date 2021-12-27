<template>
  <TopBar />
  <hr />
  <div class="align-right">
    <div id="new-contact">
      <input type="text" placeholder="Suche" v-model="search" class="search" />
    </div>
    <span class="border-left">
      <span @click="changePageIndex('NewContact')">
        <span class="material-icons md-15" >
          add
        </span>
      </span>
    </span>
  </div>
  <hr />
  <div class="contacts">
    <div
      class="contact hoverEffect"
      v-for="contact in filteredContacts"
      :key="contact.id"
    >
        <span @click="gotoContactDetail(contact.id)">
          <li>
            {{ contact.name }}
          </li>
        </span>
    </div>
  </div>

  <HomeButton />
</template>

<script>
import TopBar from "./components/TopBar.vue";
import HomeButton from "./components/HomeButton.vue";
import useContacts from "./composables/useContacts.js";
import usePage from "./composables/usePage.js"

import { computed, defineComponent, ref } from "vue";


export default defineComponent({
  name: 'Contacts',
  components: {
    TopBar,
    HomeButton,
  },
  setup() {
    const search = ref("");

    const { contacts } = useContacts();
    const { setPage, setProp} = usePage();

    const filteredContacts = computed(() => {
      return contacts.value.filter((contact) => {
        contact.name = contact.firstName + " " + contact.lastName;
        return contact.name.toLowerCase().match(search.value.toLowerCase());
      });
    });

    function changePageIndex(index) {
      setPage(index);
    }

    function gotoContactDetail(id){
        setProp(id);
        setPage('ContactDetail');
    }

    //const contacts

    return { filteredContacts, search, gotoContactDetail, changePageIndex };
  },
});
</script>

<style>
</style>
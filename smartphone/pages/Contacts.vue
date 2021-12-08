<template>
  <TopBar />
  <hr />
  <div class="align-right">
    <div id="new-contact">
      <input type="text" placeholder="Suche" v-model="search" class="search" />
    </div>
    <span class="border-left">
      <router-link class="routerlink" :to="{ name: 'NewContact' }">
        <!-- <Icon size="1.5vw">
          <PlusSharp />
        </Icon> -->
      </router-link>
    </span>
  </div>
  <hr />
  <div class="contacts">
    <div
      class="contact hoverEffect"
      v-for="contact in filteredContacts"
      :key="contact.id"
    >
      <router-link
        class="routerlink"
        :to="{ name: 'ContactDetail', params: { id: contact.id } }"
      >
        <span>
          <li>
            {{ contact.name }}
          </li>
        </span>
      </router-link>
    </div>
  </div>

  <HomeButton />
</template>

<script>
import TopBar from "./components/TopBar.vue";
import HomeButton from "./components/HomeButton.vue";
import useContacts from "./composables/useContacts.js";

// import { PlusSharp } from "@vicons/material";
// import { Icon } from "@vicons/utils";
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

    const filteredContacts = computed(() => {
      return contacts.value.filter((contact) => {
        contact.name = contact.firstName + " " + contact.lastName;
        return contact.name.toLowerCase().match(search.value.toLowerCase());
      });
    });

    //const contacts

    return { filteredContacts, search };
  },
});
</script>

<style>
</style>
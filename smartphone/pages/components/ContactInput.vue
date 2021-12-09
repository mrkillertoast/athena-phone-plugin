l<template>
  <div id="contactInput" v-if="!editmode">
    <div class="box">
      <label for="firstName"> vorname: </label>
      <input
        class="inputLine"
        name="firstName"
        type="text"
        :readonly="readonly"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)"
      />
    </div>
    <div class="box">
      <label for="lastName"> <em>Nachname:</em> </label>
      <input
        class="inputLine"
        name="lastName"
        type="text"
        :readonly="readonly"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)"
      />
    </div>
    <div class="box">
      <label for="phoneNumber"> <em>Telefonnummer:</em> </label>
      <input
        class="inputLine"
        name="phoneNumber"
        type="number"
        :readonly="readonly"
        :value="phoneNumber"
        @input="$emit('update:phoneNumber', $event.target.value)"
      />
    </div>
  </div>
  <div v-else></div>
</template>

<script>
// import { ref } from "vue";
// import { ContactImage } from "./ContactImage";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContactInput",
  props: {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: Number,
    },
    readonly: {},
  },
  components: {},
  setup(props, context) {
    function updateLastName(event) {
      context.emit("update:lastName", event.target.value);
    }

    return { updateLastName };
    // return { readonly, firstName };
  },
});
</script>

<style>
</style>
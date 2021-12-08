<template>
<div class="wrapper">
  <div class="intialsCircle">
    <div class="initials">
      {{ initals }}
    </div>
  </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["contactFirstName", "contactLastName"],
  setup(props) {
      const contactFirstName = ref(props.contactFirstName);
      const contactLastName = ref(props.contactLastName);
    
    

    const initals = computed(() => {
      if(!contactFirstName.value || !contactLastName.value){
        return 'XX';
      }
      return contactFirstName.value[0] + contactLastName.value[0];
    });

    return { initals };
  },
};
</script>

<style>
</style>
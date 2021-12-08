import { ref } from "vue";

const contacts = ref([
  {
    id: 0,
    firstName: "Stan",
    lastName: "Wilson",
    phoneNumber: 792538165
  },
  {
    id: 1,
    firstName: "Stan",
    lastName: "Anders",
    phoneNumber: 792538165
  },
  {
    id: 2,
    firstName: "Stan",
    lastName: "Hempshworth",
    phoneNumber: 792538165
  },
  {
    id: 3,
    firstName: "Alexander",
    lastName: "Wilson",
    phoneNumber: 792538165
  },
  {
    id: 4,
    firstName: "Frank",
    lastName: "Conner",
    phoneNumber: 792538165
  },
  {
    id: 5,
    firstName: "Miguel",
    lastName: "Fazio",
    phoneNumber: 792538165
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Bahawa",
    phoneNumber: 792538165
  }
]);

export default function useContacts() {
  function updateContact(id, firstName, lastName, phoneNumber) {
    contacts.value[id].firstName = firstName;
    contacts.value[id].lastName = lastName;
    contacts.value[id].phoneNumber = phoneNumber;
  }
  function getContact(id) {
    return contacts.value[id];
  }
  function saveContact(firstName, lastName, phoneNumber) {
    let id = contacts.value.length;

    let contact = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    };
    contacts.value.push(contact);
  }

  function deleteContact(id) {
    //let tempArray = contacts.value.splice(id,1)
    const index = contacts.value.indexOf(id);
    if (index > -1) {
      contacts.value.splice(index, 1);
    }

    console.log(contacts.value.splice(id, 1));
  }
  return { contacts, updateContact, getContact, saveContact, deleteContact };
}

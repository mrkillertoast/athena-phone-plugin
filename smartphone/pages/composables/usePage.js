import { ref } from "vue";
import Pages from "../exports.ts";

const pages = [...Pages];
const activePage = ref(0);

export default function usePage() {
  function setPage(val) {
    let index = pages.indexOf(val);
    activePage.value = index;
  }

  return { activePage, setPage };
}

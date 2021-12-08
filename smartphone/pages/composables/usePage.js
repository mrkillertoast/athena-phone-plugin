import { ref } from 'vue';

const activePage = ref(0);

export default function usePage() {
    function setPage(val) {
        activePage.value = val;
    }

    return { activePage, setPage };
}
import { ref } from 'vue';
//import Pages from '../exports.ts';

const pages = [
    'ActiveCall',
    'ContactDetail',
    'Contacts',
    'DialScreen',
    'Homescreen',
    'IncomingCall',
    'NewContact',
    'Settings',
];
const activePage = ref(4);
let currentProp = ref();

export default function usePage() {
    function setPage(val) {
        let index = pages.indexOf(val);
        activePage.value = index;
    }

    function setProp(arg) {
        currentProp = arg;
    }

    return { activePage, setPage, currentProp, setProp };
}
<template>
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
    <div class="wrapper">
        <body>
            <div id="smartphone">
                <component :is="pages[activePage]" class="fade-in" :key="pageIndex" @changePageIndex="changePageIndex"></component>
            </div>
        </body>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pages from './pages/exports';
import usePage from './pages/composables/usePage.js'

// Very Important! The name of the component must match the file name.
// Don't forget to do this. This is a note so you don't forget.
const ComponentName = 'Smartphone';
export default defineComponent({
    name: ComponentName,
    components: {
        ...Pages, // Page1, Page2, Page3
    },
    // data() {
    //     return {
    //         pageIndex: 0,
    //         pages: ['Homescreen', 'Contacts'],
    //     };
    // },
    setup(props, context){
        let pageIndex= 4;
        let pages = [
    'ActiveCall',
    'ContactDetail',
    'Contacts',
    'DialScreen',
    'Homescreen',
    'IncomingCall',
    'NewContact',
    'Settings',
];

        const {activePage} = usePage()



        function changePageIndex(index){
            console.log(index);
        }
    
        return{
            pageIndex,
            pages,
            changePageIndex,
            activePage
        }
    }
});
</script>

            // <component :is="pages[pageIndex]" class="fade-in" :key="pageIndex"></component>


<style>
:root {
  --border: rgb(0, 0, 0);
  --font: #fff;
  --background: rgb(37, 105, 150);
  --fav: rgb(25, 70, 100);
  --fav-dark: rgb(17, 47, 66);
  --red: rgb(207, 102, 102);
}
* {
  margin: 0;
  padding: 0;
  font-family: "Varela Round", Helvetica, sans-serif;
}
*:focus {
  outline: none;
}
body {
  font-size: 1vw;
  overflow: hidden;
}
h5 {
  text-align: center;
  font-size: 1vw;
}
#smartphone {
  color: var(--font);
  background-color: var(--background);
  position: absolute;
  width: 15vw;
  height: 30vw;
  border: 0.2vw solid var(--border);
  right: 2vw;
  border-radius: 0.75vw;
  box-shadow: 0 0 1vw var(--border);
  top: 19vw;
  /*opacity: 0.5;*/
}
#notificationBar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  background-color: rgb(25, 70, 100);
  border-top-left-radius: 0.75vw;
  border-top-right-radius: 0.75vw;
  height: 1.5vw;
  font-size: 0.7vw;
}
#notificationBar > div {
  text-align: center;
}
#notch {
  background-color: #000;
  min-height: 100%;
  border-bottom-left-radius: 0.8vw;
  border-bottom-right-radius: 0.8vw;
  width: 50%;
}
#cam {
  position: absolute;
  width: 0.5vw;
  height: 0.5vw;
  top: 0.4vw;
  left: calc(100% / 2 - 0.35vw);
  border: 0.1vw solid rgb(58, 58, 58);
  border-radius: 100%;
  background-color: rgb(58, 58, 58);
}
#clock {
  width: 25%;
}
#headInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#headInfo i {
  padding: 0.5vw;
}
#homeScreen {
  min-height: 100%;
  position: relative;
}
#homeButton {
  position: absolute;
  bottom: 0;
  width: 2vw;
  height: 2vw;
  left: calc(100% / 2 - 1vw);
  border: 0.1vw solid #000;
  border-radius: 100%;
  background-color: #000;
  opacity: 0.25;
  margin: 0.5vw 0;
}
#homeButton:hover {
  opacity: 0.5;
  cursor: pointer;
}
#hotBar,
#apps {
  display: flex;
  align-items: center;
  justify-content: center;
}
#apps {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
#hotBar {
  position: absolute;
  top: calc(100% - 6.3vw);
  width: 100%;
  /* margin: 0.25vw; */
  height: 3vw;
  background-color: var(--fav);
  /* border-radius: 1vw; */
}
.notification-padding {
  padding-top: 0.25vw;
}
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 2.75vw;
  height: 2.75vw;
  margin: 0.5vw;
  border-radius: 0.5vw;
  text-align: center;
  font-size: 1.5vw;
  line-height: 3vw;
  cursor: pointer;
  align-self: center;
  position: relative;
  user-select: none;
  /* padding: 3%; */
}
.app:hover {
  opacity: 0.75;
}
#hotBar > .app {
  margin: 0.25vw;
  width: 2.5vw;
  height: 2.5vw;
  line-height: 2.75vw;
}

ul {
  list-style: none;
}
li {
  padding: 5% 2%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}

/* APPS */
#appPhoneButton {
  background-color: rgb(22, 109, 19);
}
#appContactsButton {
  background-color: rgb(21, 141, 115);
}
#appMessagesButton {
  background-color: rgb(172, 109, 50);
}
#appAirplaneButton {
  background-color: rgb(34, 132, 189);
}
#appChargeButton {
  background-color: rgb(23, 153, 56);
}

/* Round Settings Switch */
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 2vw;
  height: 1vw;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 0.8vw;
  width: 0.8vw;
  left: 0.1vw;
  bottom: 0.1vw;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(1vw);
}

/* Rounded sliders */
.slider.round {
  border-radius: 0.5vw;
}

.slider.round:before {
  border-radius: 50%;
}

/* Contacts */
.align-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  /* background-color: rgb(25, 70, 100); */
}
.border-left {
  border-left: 2px solid white;
  background-color: rgb(37, 105, 150);
}
#new-contact {
  padding: 0 2% 0;
}
.contacts {
  max-height: 22vw;
  overflow-y: auto;
}

.intialsCircle {
  position: relative;
  height: 8vw;
  width: 8vw;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  left: calc(100% / 2 - 4.2vw);
  border: 0.2vw solid rgb(66, 66, 66);
  box-shadow: inset 0px 0px 77px rgba(0, 0, 0, 0.6);
}
.initials {
  position: absolute;
  font-size: 4vw;
  color: black;
  width: 100%;
  text-align: center;
  top: calc(100% / 2 - 2.3vw);
}
#back {
  padding: 0 0 0 3%;
}
.routerlink {
  text-decoration: none;
  color: inherit;
}
.search {
  width: 12.4vw;
  border: 0;
  padding: 0.25vw;
  background-color: var(--background);
  color: var(--font);
  border-radius: 0.25vw;
  font-size: 0.75vw;
  font-style: italic;
}
input[type="text"]::placeholder {
  color: lightgray;
}
#contactInput {
  position: relative;
  display: grid;
  grid-column: 5vw 10vw;
  font-size: 0.8vw;
  text-transform: capitalize;
  max-height: 100%;
  overflow-y: auto;
  /* padding: 2% 0% 4%; */
  /* top: 15vw; */
}
#contactActions {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
  justify-items: stretch;
  text-align: center;
  min-height: 3vw;
  border-top: 0.1vw solid var(--font);
  border-bottom: 0.1vw solid var(--font);
  margin: 5% 0 5% 0;
}
.hoverEffect:hover {
  opacity: 0.5;
  background-color: rgb(25, 70, 100);
  cursor: pointer;
}
.inputLine {
  width: 97%;
  border: 0;
  border-bottom: 0.1vw solid white;
  background-color: var(--background);
  color: var(--font);
  font-size: 1.2vw;
  padding: 0 0.2vw 0 0.2vw;
}
label {
  font-size: 0.8vw;
  font-style: italic;
  color: lightgray;
}
.box {
  /* border: 0.2vw solid var(--fav-dark); */
  margin: 0.2vw;
  padding: 0.2vw;
  /* border-style: groove; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.columns-3 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.grid-3-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: stretch;
  text-align: center;
}
.circle {
  /* padding: 2%; */
  margin-bottom: 5%;
  position: relative;
  height: 2.5vw;
  width: 2.5vw;
  background-color: #bbb;
  border-radius: 50%;
  /* display: inline-block; */
  left: calc(100% / 2 - 1.25vw);
  /* text-align: center;
  top: calc(100% / 2); */
  border: 0.2vw solid rgb(66, 66, 66);
  box-shadow: inset 0px 0px 77px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  /* margin-left: 5%;
  margin-right:50%; */
}
.center {
  position: relative;
  text-align: center;
  top: calc(100% / 2 - 0.75vw);
}
.test {
  margin: 5% 10% 5% 10%;
}
.font-3 {
  margin-top: 10%;
  font-size: 2vw;
}
.dial {
  border: solid 1px black;
  border-radius: 0.5vw;

  width: 7vw;
  left: calc(100% / 2 - 4.5vw);
  padding: 1vw;
  cursor: pointer;
  margin-top: 3vw;
  background-color: green;
  opacity: 70%;
}
.dial:hover {
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.66);
  opacity: 90%;
}
.bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.circle2 {
  margin-bottom: 5%;
  height: 3.5vw;
  width: 3.5vw;
  border-radius: 50%;
  left: calc(100% / 2 - 1.75vw);
  cursor: pointer;
}
.circle2:hover {
  box-shadow: 0vw 0vw 1vw 0vw rgba(0, 0, 0, 0.7);
}
.green {
  background-color: green;
}
.red {
  background-color: red;
}

#caller {
  max-width: 100%;
  text-align: center;
  font-size: 2vw;
  padding-top: 6%;
  padding-bottom: 6%;
}
.grid-2-1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  justify-items: center;
}
.grid-3-1 {
  margin-top: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.item {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 2.5vw;
  padding: 2%;
  margin: 2%;
  height: 3.5vw;
  width: 3.5vw;
}
.item:hover {
  background-color: gray;
  opacity: 60%;
}
.padding-bottom-2vw {
  padding-bottom: 2vw;
}
/* Rules for sizing the icon. */

.material-icons.md-1 {
    font-size: 1vw;
}
.material-icons.md-15{
    font-size: 1.5vw;
}
.material-icons.md-2 {
    font-size: 2vw;
}

.material-icons.md-35 {
    font-size: 3.5vw;
}

.material-icons.md-48 {
    font-size: 48px;
}


/* Rules for using icons as black on a light background. */

.material-icons.md-dark {
    color: rgba(0, 0, 0, 0.54);
}

.material-icons.md-dark.md-inactive {
    color: rgba(0, 0, 0, 0.26);
}


/* Rules for using icons as white on a dark background. */

.material-icons.md-light {
    color: rgba(255, 255, 255, 1);
}

.material-icons.md-light.md-inactive {
    color: rgba(255, 255, 255, 0.3);
}
</style>

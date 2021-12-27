import { ref } from "vue";

const currentFlightModeState = ref(false);

export default function useFlightMode() {
  function setFlightMode(val) {
    currentFlightModeState.value = val;
  }

  return { currentFlightModeState, setFlightMode };
}

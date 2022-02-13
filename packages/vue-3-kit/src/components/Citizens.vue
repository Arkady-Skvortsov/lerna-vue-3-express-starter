<template>
  <div class="home-container">
    <div @mouseover="getCitizens" v-for="citizen of citizens">
      {{ citizen.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { storeToRefs, mapActions } from "pinia";
import axios from "axios";
import { useCitizensStore } from "../stores/citizens";

export default {
  setup() {
    const citizensStore = useCitizensStore();

    const { citizens } = storeToRefs(citizensStore);

    const { getCitizens } = mapActions(useCitizensStore, ["getCitizens"]);
  },
};
</script>

<style lang="scss">
.home-container {
  margin: auto;
  position: center;
  max-width: 90%;
}
</style>

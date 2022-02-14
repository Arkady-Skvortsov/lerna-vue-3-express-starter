<template>
  <div class="home-container">
    <div v-for="(citizen, index) of citizens" class="citizens-block">
      <div class="citizens">{{ citizen }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs, mapActions } from 'pinia';
import axios from 'axios';
import { useCitizensStore } from '../stores/citizens';

export default {
  setup() {
    let citizens: Array = [];

    async function getCitizenDetails() {
      console.log('F');
    }

    onMounted(async () => {
      citizens = await axios.get('http://localhost:5500/citizens');
    });

    return {
      citizens,
      getCitizenDetails,
    };
  },
};
</script>

<style lang="scss">
.home-container {
  margin: auto;
  position: center;
  max-width: 90%;
  background: yellow;
  opacity: 0.75;

  .ciizens-block {
    max-width: 60%;
    max-height: 20%;
    cursor: pointer;

    h1 {
      color: red;
      font-size: 30px;
    }
  }
}
</style>

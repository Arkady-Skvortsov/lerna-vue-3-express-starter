<template>
  <div class="home-container">
    <div
      class=""
      :key="citizen._id"
      @mouseover="getCitizens(index)"
      v-for="(citizen, index) of citizens"
    >
      {{ citizen.name }}
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      citizens: [],
    };
  },

  methods: {
    getCitizens(index: number) {
      const el = this.citizens.filter((citizen, i) => citizen[i] === index);

      console.log(el);
    },
  },

  mounted() {
    axios.get("http://localhost:5501/citizens").then((response) => {
      this.citizens = response.data;
    });
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

<template>
  <div class="home-container">
    <div
      class="home-container__citizen-block"
      :key="citizen._id"
      @mouseover="getCitizenInformation(index)"
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
    getCitizenInformation(index: number) {
      const el = this.citizens.find((citizen, idx) => idx === index);

      el.groups.map((group) => {
        alert(JSON.stringify(group.name));
      });
    },
  },

  mounted() {
    axios
      .get("http://localhost:5502/citizens", { method: "GET" })
      .then((response) => {
        this.citizens = response.data;

        this.citizens.map((citizen) => {
          console.log(citizen);
        });
      });
  },
};
</script>

<style lang="scss">
.home-container {
  margin: auto;
  position: center;
  max-width: 90%;

  &__citizen-block {
    margin-top: 20px;
    width: 250px;
    height: 75px;
    cursor: pointer;
    background: black;
    color: white;
    text-align: center;
  }
}
</style>

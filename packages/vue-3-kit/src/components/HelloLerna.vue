<template>
  <div class="home-container">
    <img :alt="text" src="../assets/lerna_logo.png" />

    <div class="text-container">
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import axios from "axios";
import { useCitizensStore } from "../stores/citizens";

export default {
  data() {
    return {
      text: "Hello Lerna",
    };
  },

  async computed() {
    const citizens = await axios.get("http://localhost:5500/citizens", {
      method: "GET",
    });

    console.log(citizens);
  },
};
</script>

<style lang="scss">
.home-container {
  position: relative;
  margin: auto;
  max-width: 60%;
  max-height: 60%;

  img {
    max-width: 50%;
    max-height: 50%;
  }

  .text-container {
    margin-top: 10px;
    margin: auto;
  }
}
</style>

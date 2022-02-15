<template>
  <div class="home-container">
    <img :alt="text" src="../assets/lerna_logo.png" />

    <div class="text-container">
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, defineComponent } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      text: "",
    };
  },

  mounted() {
    axios
      .get("http://localhost:5501")
      .then((response) => (this.text = response.data));
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

    h1 {
      color: red;
    }
  }
}
</style>

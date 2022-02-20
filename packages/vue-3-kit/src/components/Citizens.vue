<template>
  <div class="home-container">
    <div
      class="cities-block"
      v-for="(city, index) in filteredArray"
      :key="city"
    >
      <h1>{{ city.name }}</h1>

      <ul v-for="citizen in city.citizens">
        <li>
          ({{ citizen.groups.map((group) => group.name).join(" ") }}) -
          {{ citizen.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      citizens: [],
      cities: [],
    };
  },

  async mounted() {
    this.citizens = await axios
      .get("http://localhost:5500/citizens")
      .then((payload) => payload.data);

    this.cities = await axios
      .get("http://localhost:5500/cities")
      .then((payload) => payload.data);
  },

  computed: {
    filteredArray() {
      return this.cities.map((city) => {
        const citizens = this.citizens.filter(
          (citizen) => citizen.city_id === city._id
        );
        return { ...city, citizens };
      });
    },
  },
};
</script>

<style lang="scss">
.home-container {
  margin: auto;
  max-width: 90%;

  .cities-block {
    margin-top: 20px;
    max-width: 550px;
    min-height: 450px;
    cursor: pointer;
    background: black;
    color: white;
    text-align: center;

    ul {
      list-style-type: none;
    }
  }
}
</style>

import { defineStore } from "pinia";
import axios from "axios";

export const useCitizensStore = defineStore("citizen", {
  state: () => ({
    citizens: [],
    hello: "",
  }),
  actions: {
    async getCitizens() {
      try {
        this.citizens = await axios.get("http://localhost:5500/citizens");

        return this.citizens;
      } catch (e) {
        console.log(e);
      }
    },

    async getHello() {
      try {
        this.hello = await axios.get("http://localhost:5500/hello");

        return this.hello;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    sortSitizensBySortedParams(e) {
      return this.citizens;
    },
  },
});

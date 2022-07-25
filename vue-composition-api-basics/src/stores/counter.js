import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "My Counter Title",
  }),

  getters: {
    oddOrEvent: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },

  actions: {
    increment(amount) {
      this.count += amount;
    },
    decrease(amount) {
      this.count -= amount;
    },
  },
});

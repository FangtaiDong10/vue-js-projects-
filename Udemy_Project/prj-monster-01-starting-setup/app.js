function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },

    mayUseSpecialStyles() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      // 5-12 random number generation
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      const attackValue = getRandomValue(5, 12);

      this.monsterHealth -= attackValue;
      // we can use this to call a Vue object method in another object!
      this.attackPlayer();
    },

    attackPlayer() {
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      const attackValue = getRandomValue(8, 15);

      this.playerHealth -= attackValue;
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});
app.mount("#game");

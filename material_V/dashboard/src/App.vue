<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col
          v-for="(widget, i) in widgets"
          :key="i"
          class="d-flex child-flex"
          cols="12"
          sm="6"
          md="4"
          xl="2"
        >
          <component :is="widget" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'App',

    computed: {
      ...mapState('app', ['widgets']),
    },
  }
</script>

<style>
  .v-card, .v-list {
    border-radius: 0;
  }
</style>

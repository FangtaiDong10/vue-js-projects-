<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="color"
    :dark="!hasColor"
    :light="hasColor"
    app
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-spacer class="hidden-sm-and-up" />

    <v-toolbar-title class="headline">
      <template v-if="$vuetify.breakpoint.smAndUp">
        <span class="font-weight-bold">
          VUETIFY
        </span>
        <span class="font-weight-light">
          MATERIALKIT
        </span>
      </template>
      <span
        v-else
        class="font-weight-bold"
      >
        LANDING
      </span>
    </v-toolbar-title>

    <v-spacer class="hidden-xs-only" />

    <v-btn
      v-for="([link, text], i) in links"
      :key="i"
      :to="link"
      class="font-weight-light hidden-sm-and-down ml-2"
      large
      text
    >
      {{ text }}
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapMutations,
    mapState,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    data: () => ({
      hasColor: false,
    }),

    computed: {
      ...mapState('app', ['links']),
      color () {
        return this.hasColor ? 'white' : 'transparent'
      },
    },

    methods: {
      ...mapMutations('app', ['toggleDrawer']),
      onScroll () {
        this.hasColor = window.scrollY > 50
      },
    },
  }
</script>

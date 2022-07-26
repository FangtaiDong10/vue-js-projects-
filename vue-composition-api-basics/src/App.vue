<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <router-view />
  </div>
</template>

<script setup>
import { reactive, provide } from "vue";
import { useOnline } from "@vueuse/core";

import NavBar from "@/components/Layout/NavBar.vue";

/**
 * user data
 */
const userData = reactive({
  name: "David",
  username: "Fangtai Dong",
});

provide("user-data", userData);

/**
 * online status
 */
const online = useOnline();
</script>

<style>
@import "bulma\css\bulma.min.css";
</style>

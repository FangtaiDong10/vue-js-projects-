<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <!-- brand -->
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <a class="logo" href="/">NoteBalls</a>

          <!-- <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        /> -->
        </div>

        <!-- burger icon -->
        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- navbarBasicExample -->
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-start">
          <RouterLink
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active">
            Notes
          </RouterLink>

          <RouterLink
            @click="showMobileNav = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active">
            Stats
          </RouterLink>

          
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

/**
 * mobile nav
 */
const showMobileNav = ref(false);

</script>

<style>
@media (max-width: 1024px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}

.logo {
  text-decoration: none;
  color: aliceblue;
}

.logo:hover {
  color: white;
}
</style>

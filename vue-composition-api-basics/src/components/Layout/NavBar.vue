<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2" >
      <!-- brand -->
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          NoteBalls
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
        :class="{ 'is-active': showMobileNav }">
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item" active-class="is-active">
            Notes
          </RouterLink>

          <RouterLink to="/stats" class="navbar-item" active-class="is-active">
            Documentation
          </RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
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
@media(max-width: 1024px){
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}

</style>

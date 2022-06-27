<template>
  <section id="hero">
    <base-jumbotron
      :src="require('@/assets/sample-bg.jpg')"
      dark
    >
      <v-row
        align="center"
        justify="center"
      >
        <base-title>
          Sample Page
        </base-title>
      </v-row>
    </base-jumbotron>
  </section>
</template>

<script>
  export default {
    name: 'SampleHero',
  }
</script>

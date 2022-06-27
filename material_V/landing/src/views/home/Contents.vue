<template>
  <section id="talk">
    <base-card>
      <v-card-title
        :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
        class="justify-center font-weight-bold grey--text text--darken-3 mb-3 text-center"
      >
        Let's talk frameworks
      </v-card-title>
      <v-card-text class="text-left text-md-center title font-weight-light mx-auto mb-5">
        This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.
      </v-card-text>

      <v-container>
        <v-row>
          <v-col
            v-for="(feature, i) in features"
            :key="i"
            cols="12"
            md="4"
            sm="6"
          >
            <div class="text-center">
              <v-icon
                :color="feature.color"
                :size="64"
                class="mb-3"
                v-text="feature.icon"
              />
              <p
                class="text-justify text-md-center"
                v-text="feature.text"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-divider class="my-5 mx-3" />

      <v-card-title
        :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
        class="justify-center font-weight-bold grey--text text--darken-3 mb-3"
      >
        Work with us
      </v-card-title>

      <v-card-text class="text-left text-md-center title font-weight-light mx-auto mb-5">
        Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.
      </v-card-text>

      <v-card-text>
        <v-form>
          <v-container class="px-0">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Name"
                  outlined
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Email"
                  outlined
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Message"
                  outlined
                  rows="16"
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  :block="$vuetify.breakpoint.smAndDown"
                  class="font-weight-light"
                  color="primary"
                  large
                >
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </base-card>
  </section>
</template>

<script>
  export default {
    name: 'HomeContents',

    data: () => ({
      features: [
        {
          icon: 'mdi-message-text',
          color: 'indigo',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        },
        {
          icon: 'mdi-shield-plus',
          color: 'green',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        },
        {
          icon: 'mdi-widgets',
          color: 'primary',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        },
      ],
    }),
  }
</script>

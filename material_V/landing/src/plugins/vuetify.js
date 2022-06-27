import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#F44336',
        secondary: '#2B2D42',
        accent: '#8D99AE',
      },
    },
  },
})

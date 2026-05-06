import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'gravely',
    themes: {
      gravely: {
        dark: false,
        colors: {
          primary: '#3D2B1F',      // Deep earthy brown
          secondary: '#6B4C3B',    // Medium brown
          accent: '#D4A017',       // Gold
          error: '#C62828',
          warning: '#F57F17',
          info: '#4A6572',
          success: '#2E7D32',
          background: '#FAFAF8',
          surface: '#FFFFFF',
          'on-primary': '#FFFFFF',
          'on-accent': '#1A1A1A',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      elevation: 0,
    },
    VCard: {
      rounded: 'lg',
    },
  },
})

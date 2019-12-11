import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: { iconfont: 'mdi' },
  theme: {
    themes: {
      light: {
        primary: '#607D8B',
        secondary: '#0D47A1',
        accent: '#0D47A1',
        success: '#7CB342',
        error: '#F44336'
      },
    },
  },
})

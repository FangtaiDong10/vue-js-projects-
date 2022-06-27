import { set, toggle } from '@/utils/vuex'

export default {
  namespaced: true,

  state: {
    links: [
      ['/', 'Home'],
      ['/blog', 'Blog'],
      ['/sample-page', 'Sample Page'],
    ],
    drawer: null,
  },

  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer'),
  },
}

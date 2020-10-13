import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      { name: 'home', path: '/', label: 'home' },
      { name: 'skills', path: '/skills', label: 'my skills' },
      { name: 'code', path: '/code', label: 'my code' },
      { name: 'contact', path: '/contact', label: 'contact me' }
    ],
    items: {
      frontend: [
        { name: 'languages', subtitle: true },
        { name: 'Javascript', icon: 'heart' },
        { name: 'Typescript' },
        { name: 'Javascript frameworks', subtitle: true },
        { name: 'Vue 2', icon: 'heart' },
        { name: 'Vue 3', icon: 'book' },
        { name: 'Angular JS', icon: 'arrowAltDown' },
        { name: 'Angular', icon: 'arrowAltDown' },
        { name: 'React', icon: 'book' },
        { name: 'Vue based UI libraries', subtitle: true },
        { name: 'Quasar', icon: 'heart' },
        { name: 'Vuetify'},
        { name: 'styling', subtitle: true },
        { name: 'CSS 3'},
        { name: 'stylus', icon: 'heart' },
        { name: 'Sass' },
        { name: 'others', subtitle: true },
        { name: 'JQuery', icon: 'arrowAltDown' }
      ],
      backend: [
        { name: 'languages', subtitle: true },
        { name: 'Javascript / Node', icon: 'heart' },
        { name: 'PHP 7' },
        { name: 'PHP 5', icon: 'arrowAltDown' },
        { name: 'Python' },
        { name: 'databases', subtitle: true },
        { name: 'PostgreSQL', icon: 'heart' },
        { name: 'MySQL' },
        { name: 'MongoDb', icon: 'arrowAltDown' },
        { name: 'webservers', subtitle: true },
        { name: 'nginx', icon: 'heart' },
        { name: 'Apache' },
        { name: 'others', subtitle: true },
        { name: 'REST' }
      ],
      others: [
        { name: 'languages', subtitle: true },
        { name: 'Czech (native)' },
        { name: 'English' },
        { name: 'Italian' },
        { name: 'Russian' },
        { name: 'versioning', subtitle: true },
        { name: 'git' },
        { name: 'gitHub' },
        { name: 'npm' },
        { name: 'code editors', subtitle: true },
        { name: 'VS Code', icon: 'heart' },
        { name: 'SublimeText', icon: 'arrowAltDown' }
      ]
    }
  },
  getters: {
    getItems: state => title => state.items[title] || [],
    getLinks: state => state.links
  },
  actions: {
  },
  modules: {
  }
})

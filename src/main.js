import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PageWrap from '@/components/PageWrap.vue'
import IconBase from '@/components/icons/IconBase.vue'
import TransitionGrow from '@/components/TransitionGrow.vue'

Vue.config.productionTip = false
Vue.component('PageWrap', PageWrap)
Vue.component('IconBase', IconBase)
Vue.component('TransitionGrow', TransitionGrow )
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

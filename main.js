import App from './App'
import { myRequest } from './util/api.js'

import Vue from 'vue'
Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate',date => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	// 固定2位，不满2位的用0补满，比如3月时，显示为03
	const month = (nDate.getMonth()+1).toString().padStart(2,0)
	const day = nDate.getDate().toString().padStart(2,0)
	return year+'年'+month+'月'+day+'日'
})
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
import Vue from 'vue'
import App from './App.vue'
// import stickyContainer from './components/stickyContainer.vue'
// import SwiperSlider from './components/SwiperSlider.vue'

Vue.config.productionTip = false
// Vue.component('c-'+stickyContainer.name,stickyContainer)
// Vue.component('c-'+SwiperSlider.name,SwiperSlider)

new Vue({
  render: h => h(App),
}).$mount('#app')

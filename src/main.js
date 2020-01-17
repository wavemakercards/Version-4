import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)
Vue.config.productionTip = false

new Vue({
    store,
    vuetify,
    beforeMount() {
        this.$store.commit('initialiseStore'); //loading state from localstorage
    },
    render: h => h(App)
}).$mount('#app')
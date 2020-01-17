import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)
Vue.config.productionTip = false

import db from "./DexieDB";
import { uuid } from 'vue-uuid';
new Vue({
    store,
    vuetify,
    data: () => ({
        db,
        uuid,
        liveData: {
            SelectedCard: '', // allows the editor to know what card is selected
        }
    }),
    methods: {
        FindNodeByID: function(id, parentObj) {
            let el = false
            let arrtosearch = parentObj.elements
            arrtosearch.some((element, index) => {
                if (element.id === id) {
                    // console.log("Match Found", id)
                    el = {}
                    el.parentObj = parentObj
                    el.index = index
                        //  console.log("result: ", el)
                    return true
                } else {
                    if (element.elements && !el) {
                        el = this.$root.FindNodeByID(id, element)
                    }
                }
            });
            return el
        }
    },
    beforeMount() {
        this.$store.commit('initialiseStore'); //loading state from localstorage
    },
    render: h => h(App)
}).$mount('#app')
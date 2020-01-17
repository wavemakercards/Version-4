import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
import db from "./DexieDB";
import {
    uuid
} from 'vue-uuid';
new Vue({
    store,
    vuetify,
    data: () => ({
        db,
        uuid,
        ProjectState: {
            ProjectInfo: null, // global Project Info
            Manuscript: [],
            SelectedCard: '', // allows the editor to know what card is selected
            Section: ''
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
        },
        SaveProjectData() {
            let MYstate = { id: 1, state: JSON.stringify(this.$root.ProjectState), lastupdated: Date.now() }
            this.$root.db.ProjectState.put(MYstate).then(function(updated) {
                if (updated) {
                    console.log("Project Save done");
                } else {
                    console.log("Project Failed Save");
                }
            });
        }
    },
    beforeMount() {
        this.$store.commit('initialiseStore'); //loading state from localstorage
        console.log("getting the data from the database")
        this.$root.db.ProjectState.get({
            id: 1
        }).then((result) => {
            return result;
        }).then(data => {
            console.log("Project State Load ", data)
            if (data) {
                this.$root.ProjectState = JSON.parse(data.state)
            } else {
                console.log("User Needs to load a project or create a new one")
                this.$root.ProjectState.ProjectInfo = {};
            }
        });
    },
    render: h => h(App)
}).$mount('#app')
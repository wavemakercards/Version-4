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
        liveData: {
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
            this.$root.db.ProjectInfo.put(this.$root.liveData.ProjectInfo).then(function(updated) {
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
        this.$root.db.ProjectInfo.get({
            id: 1
        }).then((result) => {
            return result;
        }).then(data => {
            //console.log(data)
            if (data) {
                this.$root.liveData.ProjectInfo = data
                    //console.log("MyData", this.MyData)
                this.$root.liveData.Manuscript = JSON.parse(this.$root.liveData.ProjectInfo.manuscript)
            } else {
                console.warn("NO PROJECT!")
                this.$root.liveData.ProjectInfo = {};
                /*
                this.MyData = {}
                this.MyData.id = 1
                this.MyData.uuid = this.$root.uuid.v1()
                this.MyData.title = "Created by accident"
                */
            }
        });

    },
    render: h => h(App)
}).$mount('#app')
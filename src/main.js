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

import { TiptapVuetifyPlugin } from "tiptap-vuetify";
// don't forget to import styles
import "tiptap-vuetify/dist/main.css";

Vue.use(TiptapVuetifyPlugin, {
  vuetify
});

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
        FindNodeByID: function (uuid, parentObj) {
            console.log("Find Node Started")
            let el = false
            let arrtosearch = parentObj
            if (parentObj != this.$root.ProjectState.Manuscript) {
                arrtosearch = parentObj.elements
            }
            arrtosearch.some((element, index) => {
                if (element.uuid === uuid) {
                    // console.log("Match Found", id)
                    el = {}
                    el.parentObj = parentObj
                    el.index = index
                    //  console.log("result: ", el)
                    return true
                } else {
                    if (element.elements && !el) {
                        el = this.$root.FindNodeByID(uuid, element)
                    }
                }
            });
            return el
        },
        DeleteManuscriptItem() {
            // need to get the New_Index and New_Parent of the parent
            let pos = this.$root.FindNodeByID(this.$root.ProjectState.SelectedCard.uuid, this.$root.ProjectState.Manuscript)
            console.log(pos)
            if (pos.parentObj === this.$root.ProjectState.Manuscript) {
                this.$root.ProjectState.SelectedCard = null
                pos.parentObj.splice(pos.index, 1);
            } else {
                this.$root.ProjectState.SelectedCard = pos.parentObj;
                pos.parentObj.elements.splice(pos.index, 1);
            }
            this.$root.SaveProjectData()
        },
        SaveProjectData() {
            let MYstate = { id: 1, state: JSON.stringify(this.$root.ProjectState), lastupdated: Date.now() }
            this.$root.db.ProjectState.put(MYstate).then(function (updated) {
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
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {
    uuid
} from 'vue-uuid';
import db from "@/DexieDB";
export const store = new Vuex.Store({
    state: {
        lastUpdate: null,
        AppLoaded: false,
        Interface: {
            darkmode: true,
        },
        MenuOptions: {
            section: ''
        },
        WriterTool: {
            CurrentWriterText: '',
            body: ''
        },
        ManuscriptTree: {
            ItemSelected: null,
            openTabs: [],
            elements: [],
        },

    },
    mutations: {
        initialiseStore(state) {
            // gets the AppState from the database and replaces the state - allowing persistence
            db.AppState.get({ id: 1 }).then((result) => {
                return result;
            }).then(data => {
                if (data) {
                    this.replaceState(
                        Object.assign(state, JSON.parse(data.state))
                    )
                }
                state.AppLoaded = true
            });

            // this is a localstorage alternative to the state update
            /*
             if (localStorage.getItem('WaveMakerStore')) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('WaveMakerStore')))
                );
             }
            */
        },
        SaveCardBody: (state, payload) => {
            state.WriterTool.body = payload
        },
        triggersave: (state) => {
            state.lastUpdate = new Date().getTime()
        },
        MenuSetSection: (state, payload) => {
            state.MenuOptions.section = payload;
        },
        updateElements: (state, payload) => {
            state.ManuscriptTree.elements = payload;
        },
        darkmode: (state) => {
            state.Interface.darkmode = !state.Interface.darkmode;
        },
        ManuscriptTreeItemSelected: (state, payload) => {
            state.ManuscriptTree.ItemSelected = payload;
            if (state.ManuscriptTree.ItemSelected && state.ManuscriptTree.ItemSelected.icon == 'file') {
                db.FileCards.get({ uuid: state.ManuscriptTree.ItemSelected.id })
                    .then(result => {
                        return result;
                    })
                    .then(data => {
                        console.log("Loaded ", data);
                        if (data) {
                            console.log(data);
                            state.WriterTool = data;
                        } else {
                            console.log("Selected Item not in DB creating placeholder item")
                            let NewObj = {};
                            NewObj.uuid = state.ManuscriptTree.ItemSelected.id;
                            NewObj.title = state.ManuscriptTree.ItemSelected.name;
                            NewObj.hashtags = "";
                            NewObj.meta = "";
                            NewObj.body = "";
                            NewObj.lastupdated = Date.now();
                            state.WriterTool = NewObj
                        }
                    });
            }
            /*
            if (!state.ManuscriptTree.openTabs.includes(payload.el)) {
                state.ManuscriptTree.openTabs.push(payload.el)
            }
            */
        },
        AddManuscriptTreeItem: (state, payload) => {
            let id = uuid.v1()
            let newObj = {
                id: id,
                icon: payload,
                name: "New " + payload,
            }
            if (payload === "folder") {
                newObj.open = true
                newObj.elements = []
            }

            if (state.ManuscriptTree.ItemSelected) {
                if (state.ManuscriptTree.ItemSelected.icon === "folder") {
                    state.ManuscriptTree.ItemSelected.open = true
                    state.ManuscriptTree.ItemSelected.elements.push(newObj)
                } else {
                    let pos = FindParentAndPositionInElements(state.ManuscriptTree.ItemSelected.id, state.ManuscriptTree)
                    console.log(pos)
                    pos.parentObj.elements.splice(pos.index + 1, 0, newObj);
                }
            } else {
                //console.log("DEFAULTING!")
                state.ManuscriptTree.elements.push(newObj)
            }

            //console.log(id)
            // state.ManuscriptTree.ItemSelected = payload;
        },
        DeleteCurrentItem: (state) => {
            let pos = FindParentAndPositionInElements(state.ManuscriptTree.ItemSelected.id, state.ManuscriptTree)
            console.log(pos)
            if (pos.parentObj === state.ManuscriptTree) {
                state.ManuscriptTree.ItemSelected = null
            } else {
                state.ManuscriptTree.ItemSelected = pos.parentObj;
            }
            pos.parentObj.elements.splice(pos.index, 1);
        },
        StateChanger: (state, payload) => {
            // this is just an idea mind
            // payload has path and value
            // path is array of path from root state 
            // value is value .... duh
            if (payload.path.length < 1) {
                //console.log("No Valid Path Provided")
                return false
            }
            let stateTarget = state
            let path = payload.path
            path.forEach((element, index) => {
                //console.log("lkast", index === (path.length - 1))
                if (index === (path.length - 1)) {
                    //console.log(stateTarget.element)
                    stateTarget[element] = payload.value
                } else {
                    stateTarget = stateTarget[element]
                }
            });

        },
    },
    actions: {
        GetStoreUpdate: ({
            commit
        }) => {
            commit("GetStoreUpdate");
        },
        DeleteCurrentItem: ({
            commit
        }) => {
            commit("DeleteCurrentItem");
        },
        updateElements: ({
            commit
        }, payload) => {
            commit("updateElements", payload);
        },
        darkmode: ({
            commit
        }) => {
            commit("darkmode");
        },
        MenuSetSection: ({
            commit
        }, payload) => {
            commit("MenuSetSection", payload);
        },
        ManuscriptTreeItemSelected: ({
            commit
        }, payload) => {
            commit("ManuscriptTreeItemSelected", payload);
        },
        AddManuscriptTreeItem: ({
            commit
        }, payload) => {
            commit("AddManuscriptTreeItem", payload);
        },

        StateChanger: ({
            commit
        }, payload) => {
            commit("StateChanger", payload);
        },
    }
})

function FindParentAndPositionInElements(id, parentObj) {
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
                el = FindParentAndPositionInElements(id, element)
            }
        }
    });
    return el
}

store.subscribe((mutation, state) => {
    if (state.AppLoaded) {
        // Store the state object in the Database AppState Table
        // but only if the LOAD has been done
        db.AppState
            .put({ id: 1, state: JSON.stringify(state) })
            .then(function(updated) {
                if (updated) {
                    //console.log("Cool updated!");
                } else {
                    console.log("Tits Up");
                }
            });
    }
    // Store the state object as a JSON string in localstorage (alternative)
    //  localStorage.setItem('WaveMakerStore', JSON.stringify(state));


});

export default store;
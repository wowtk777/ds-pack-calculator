import Vuex from 'vuex'
import Vue from "vue";
import {defaultMaterial} from "./materials";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        requiredResources: 0,
        readyResources: 0,
        material: defaultMaterial
    },
    getters: {
        requiredResources: state => state.requiredResources,
        readyResources: state => state.readyResources,
        material: state => state.material
    },
    mutations: {
        updateForm(state, payload) {
            state = {
                ...state,
                ...payload
            }
            console.log("New state = %s", JSON.stringify(state))
        }
    }
})

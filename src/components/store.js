import Vuex from 'vuex'
import Vue from "vue";
import {defaultMaterial} from "./materials";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        form: {
            requiredResources: 0,
            readyResources: 0,
            material: defaultMaterial
        }
    },
    getters: {
        requiredResources: state => state.form.requiredResources,
        readyResources: state => state.form.readyResources,
        material: state => state.form.material
    },
    mutations: {
        updateForm(state, payload) {
            state.form = {
                ...state.form,
                ...payload
            }
            console.log("updateForm: new state = %s", JSON.stringify(state.form))
        }
    }
})

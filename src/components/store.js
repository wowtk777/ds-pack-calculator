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
        },
        board: []
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
        },
        addPackage(state, payload) {
            state.board.push(payload)
            console.log("addPackage: new board = %s", JSON.stringify(state.board))
        },
        dropPackage(state, payload) {
            state.board.splice(payload, 1)
            console.log("addPackage: new board = %s", JSON.stringify(state.board))
        }
    }
})

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
        addCargoInfo(state, payload) {
            state.board.push(payload)
            console.log("addCargoInfo: new board = %s", JSON.stringify(state.board))
        },
        dropCargoInfo(state, payload) {
            state.board.splice(payload, 1)
            console.log("dropCargoInfo: new board = %s", JSON.stringify(state.board))
        }
    }
})

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'productions';

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: debug ? [createLogger()] : []
});

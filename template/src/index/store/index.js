import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import moduleOne from './modules/one'
import moduleTwo from './modules/two'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    moduleOne,
    moduleTwo
  },
  strict: process.env.NODE_ENV !== 'production'
})

import * as types from '../mutation-types'

const state = {
  list: []
}

const mutations = {
  [types.GET_ORDER_LIST_SUCCESS] (state, data) {
    state.list = data
  },
  [types.GET_ORDER_LIST_DATA_ERROR] (state, msg) {
    console.log(msg)
  }
}

export default {
  state,
  mutations
}

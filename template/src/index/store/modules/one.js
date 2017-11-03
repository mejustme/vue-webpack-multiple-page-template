import * as types from '../mutation-types'

const state = {
  user: {}
}

const mutations = {
  [types.GET_USER_SUCCESS] (state, data) {
    state.user = data
  },
  [types.GET_USER_ERROR] (state, msg) {
    console.log(msg)
  }
}

export default {
  state,
  mutations
}

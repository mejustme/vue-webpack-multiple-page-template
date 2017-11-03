import * as types from '../mutation-types'
import User from '../../../xhr/user/user'

export const getUser = ({commit}, data) => {
  var user = new User()
  user.$getItem().then(function (result) {
    commit(types.GET_USER_SUCCESS, result.data)
  }, function (result) {
    commit(types.GET_USER_ERROR, result.msg)
  })
}


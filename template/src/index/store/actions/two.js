import * as types from '../mutation-types'
import Order from '../../../xhr/order/order'

export const getOrderList = ({commit}, data) => {
  var order = new Order()
  order.$getItemList().then(function (result) {
    commit(types.GET_ORDER_LIST_SUCCESS, result.data)
  }, function (result) {
    commit(types.GET_ORDER_LIST_DATA_ERROR, result.msg)
  })
}


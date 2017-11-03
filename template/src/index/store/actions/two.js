import * as types from '../mutation-types'
import Order from '../../../xhr/order/order'

var order = new Order()
export const getOrderList = ({commit}, data) => {
  order.$getItemList().then(function (result) {
    commit(types.GET_ORDER_LIST_SUCCESS, result.data)
  }, function (result) {
    commit(types.GET_ORDER_LIST_DATA_ERROR, result.msg)
  })
}


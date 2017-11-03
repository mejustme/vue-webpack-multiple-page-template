import NumUtil from '../../common/numUtil'

var order = {
  orderId: '',
  orderStateStr: ''
}
export default {
  'get-item-list': {
    api: 'kop.api.order.list',
    mock: function () {
      return {
        code: 200,
        data: (function () {
          return Array.apply(null, new Array(10)).map(function () {
            return $.extend(true, {}, order, {
              orderId: Math.ceil(Math.random() * 100000),
              orderStateStr: ['IN_SERVICE', 'FINISHED'][NumUtil.random(0, 1)]
            })
          })
        })()
      }
    }
  }
}

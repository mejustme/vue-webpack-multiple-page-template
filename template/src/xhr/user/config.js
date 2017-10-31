import NumUtil from '../../common/numUtil'

export default {
  'get-item': {
    api: 'kop.api.user.item',
    mock: function () {
      return {
        code: 200,
        data: (function () {
          return {
            userName: '陈钦辉',
            isOnline: NumUtil.random(0, 1),
          }
        })()
      }
    }
  },
  'toggle-online': {
    api: 'kop.api.togglne.online',
    mock:
      function () {
        return {
          code: 200,
          data: true
        }
      }
  }
}

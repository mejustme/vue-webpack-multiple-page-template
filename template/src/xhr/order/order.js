import Base from '../base/base'
import config from './config'

const SETTING_KEY = 'xhr-order'

class Order extends Base {

  /**
   * 订单状态-服务中
   */
  static STATUS_IN_SERVICE = 'IN_SERVICE'

  /**
   * 订单状态-已完成
   */
  static STATUS_FINISHED = 'FINISHED'

  /**
   * 初始化函数
   * @private
   * @param {Object} obj
   * @param {number} obj.uid [uid=window._uid]- 登录用户id
   * @param {string} obj.token [token=window._token] - 登录用户token
   * @returns {void}
   */
  _$init (obj = {}) {
    this._$setConfig(SETTING_KEY, config)
    super._$init(obj)
  }

}

export default Order

import Base from '../base/base'
import config from './config'

const SETTING_KEY = 'xhr-user'

class User extends Base {

  /**
   * 用户角色-接机员
   */
  static ROLE_MEMBER = 0

  /**
   * 用户角色-组长
   */
  static ROLE_MANAGER = 1

  /**
   * 初始化函数
   * @private
   * @param {Object} obj
   * @param {number} obj.uid [uid=window._uid]- 登录用户id
   * @param {string} obj.token [token=window._token] - 登录用户token
   * @returns {void}
   */
  _$init (obj) {
    this._$setConfig(SETTING_KEY, config)
    super._$init(obj)
  }

  /**
   * 修改上下班状态
   * @public
   * @param {Object} data
   * @param {number} data.isOnline - 0 下班 1上班
   * @returns {Object} - Promise实例
   */
  $toggleOnline (data) {
    return this.$kop('toggle-online', data)
  }
}

export default User

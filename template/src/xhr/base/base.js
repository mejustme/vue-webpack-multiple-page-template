import config from './config'

const SETTING_KEY = 'xhr-base'

/**
 * xhr Base Class
 * @class
 */
class Base {
  constructor (obj) {
    this._$init(obj)
  }

  /**
   * 初始化函数
   * @private
   * @param {Object} obj
   * @param {number} obj.uid [uid=window._uid]- 登录用户id
   * @param {string} obj.token [token=window._token] - 登录用户token
   * @returns {void}
   */
  _$init ({uid, token} = {}) {
    Base._uid = uid
    Base._token = token
    Base._kop = Base._kop
      ? Base._kop
      : window.KUI && window.KUI.KOP
        ? new window.KUI.KOP()
        : null
    this._$setConfig(SETTING_KEY, config)
  }

  /**
   * 设置全局接口配置
   * @private
   * @param {string} SETTING_KEY - xhr实体唯一key
   * @param {Object} config - xhr实体配置
   * @returns {void}
   */
  _$setConfig (SETTING_KEY, config) {
    Base._config = Base._config || {}
    Base._config[SETTING_KEY] = Base._config[SETTING_KEY] || config
    this._SETTING_KEY = this._SETTING_KEY || SETTING_KEY
  }

  /**
   * $ajax
   * @param {String} key - 接口api
   * @param {Object} data - 上传数据
   * @public
   * @public
   * @returns {Object} promise
   */
  $ajax (key, data) {
    var that = this
    return new Promise(function (resolve, reject) {
      // 支持mock数据
      var allConfig = that.constructor._config[that._SETTING_KEY]
      var config = allConfig[key]

      if (process.env.NODE_ENV !== 'production') {
        if (!config) {
          console.error(key + ' 没有对应配置')
          return
        }
        if (allConfig.offMock && !config.offMock && config.mock) {
          var result = $.isFunction(config.mock) ? config.mock() : (config.mock || {})
          console.log(config.api)
          console.log(data)
          console.log(result)
          if (result && (result.code === 200 || result.code === 0)) {
            resolve(result)
          } else {
            reject(result)
          }
          return
        }
      }

      $.ajax({
        type: 'POST',
        url: /^(http:|https:|\/)/.test(config.api) ? config.api : (window.location.origin + window.location.pathname + '?actype=' + config.api),
        data: JSON.stringify(data),
        contentType: 'application/json;charset=utf-8'
      }).then(function (result) {
        if (result.code === 200 || result.code === 0) {
          resolve(result)
        } else {
          reject(result)
        }
      }, function (xhr, errorType) {
        reject({
          code: errorType,
          msg: '网络出错，请稍后重试'
        })
      })
    })
  }

  /**
   * 设置全局接口配置
   * @public
   * @param {string} key - kop接口api
   * @param {Object} data [data={}] - 上传后端数据
   * @returns {*} - Promise实例
   */
  $kop (key, data = {}) {
    var that = this
    if (process.env.NODE_ENV !== 'production') {
      var allConfig = that.constructor._config[that._SETTING_KEY]
      var config = allConfig[key]
      if (!config) {
        console.error(key + ' 没有对应配置')
        return
      }
      console.log(config.api)
      console.log(data)
      if (
        (window.KOPConfig && !window.KOPConfig.host) && !allConfig.offMock && !config.offMock && config.mock) {
        return new Promise(function (resolve, reject) {
          var result = window.$.isFunction(config.mock) ? config.mock() : config.mock
          console.log(result)
          if (result.code === 200) {
            resolve(result)
          } else {
            reject(result)
          }
        })
      }
    }

    return new Promise(function (resolve, reject) {
      var uid = that.constructor._uid || window._uid
      // test环境 不进行token校验，token传uid
      var token = (window.KOPConfig && window.KOPConfig.host === '10.0.53.63')
        ? uid : that.constructor._token || window._token

      that.constructor._kop.send(
        that.constructor._config[that._SETTING_KEY][key].api,
        data,
        uid,
        token,
        function (result) {
          result = {
            code: 200,
            data: result
          }
          if (process.env.NODE_ENV !== 'production') {
            console.log(result)
          }
          resolve(result)
        },
        function (err, msg) {
          var result = {
            code: err,
            msg: msg
          }
          if (process.env.NODE_ENV !== 'production') {
            console.log(result)
          }
          reject(result)
        })
    })
  }

  /**
   * 接口，封装了$kop/$ajax, 全局无kop, 就用jQuery.ajax
   * @public
   * @param {string} key - kop接口api
   * @param {Object} data [data={}] - 上传后端数据
   * @returns {Object} - Promise实例
   */
  $xhr (key, data = {}) {
    this[this.constructor._kop ? '$kop' : '$ajax'].apply(this, arguments)
  }

  /**
   * 获取item
   * @public
   * @param {Object} data [data={}]
   * @returns {Object} - Promise实例
   */
  $getItem (data = {}) {
    return this.$xhr('get-item', data)
  }

  /**
   * 获取itemList
   * @public
   * @param {Object} data [data={}]
   * @returns {Object} - Promise实例
   */
  $getItemList (data = {}) {
    return this.$xhr('get-item-list', data)
  }

  /**
   * 添加item
   * @public
   * @param {Object} data [data={}]
   * @returns {Object} - Promise实例
   */
  $addItem (data = {}) {
    return this.$xhr('add-item', data)
  }

  /**
   * 更新item
   * @public
   * @param {Object} data [data={}]
   * @returns {Object} - Promise实例
   */
  $updateItem (data = {}) {
    return this.$xhr('update-item', data)
  }

  /**
   * 删除item
   * @public
   * @param {Object} data [data={}]
   * @returns {Object} - Promise实例
   */
  $deleteItem (data = {}) {
    return this.$xhr('delete-item', data)
  }
}

export default Base

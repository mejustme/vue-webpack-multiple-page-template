/**
 * 返回时间类型串
 * 格式化时间，yyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w
 *
 * 各标识说明：
 *
 * | 标识  | 说明 |
 * | :--  | :-- |
 * | yyyy | 四位年份，如2001 |
 * | yy   | 两位年费，如01 |
 * | MM   | 两位月份，如08 |
 * | M    | 一位月份，如8 |
 * | dd   | 两位日期，如09 |
 * | d    | 一位日期，如9 |
 * | HH   | 两位小时，如07 |
 * | H    | 一位小时，如7 |
 * | mm   | 两位分钟，如03 |
 * | m    | 一位分钟，如3 |
 * | ss   | 两位秒数，如09 |
 * | s    | 一位秒数，如9 |
 * | ms   | 毫秒数，如234 |
 * | w    | 中文星期几，如一 |
 * | ct   | 12小时制中文后缀，上午/下午 |
 * | et   | 12小时制英文后缀，A.M./P.M. |
 * | cM   | 中文月份，如三 |
 * | eM   | 英文月份，如Mar |
 **/

var _getTimeData = (function () {
  var _map = {
    i: !0,
    r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
  }
  var _12cc = ['上午', '下午']
  var _12ec = ['A.M.', 'P.M.']
  var _week = ['日', '一', '二', '三', '四', '五', '六']
  var _cmon = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  var _emon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  var _fmtnmb = function (_number) {
    _number = parseInt(_number) || 0
    return (_number < 10 ? '0' : '') + _number
  }
  var _fmtclc = function (_hour) {
    return _hour < 12 ? 0 : 1
  }

  return function (_time) {
    if (!_time && _time !== 0) {
      return ''
    }
    _time = new Date(_time * 1)
    _map.yyyy = _time.getFullYear()
    _map.yy = ('' + _map.yyyy).substr(2)
    _map.M = _time.getMonth() + 1
    _map.MM = _fmtnmb(_map.M)
    _map.eM = _emon[_map.M - 1]
    _map.cM = _cmon[_map.M - 1]
    _map.d = _time.getDate()
    _map.dd = _fmtnmb(_map.d)
    _map.H = _time.getHours()
    _map.HH = _fmtnmb(_map.H)
    _map.m = _time.getMinutes()
    _map.mm = _fmtnmb(_map.m)
    _map.s = _time.getSeconds()
    _map.ss = _fmtnmb(_map.s)
    _map.ms = _time.getMilliseconds()
    _map.w = _week[_time.getDay()]
    var _cc = _fmtclc(_map.H)
    _map.ct = _12cc[_cc]
    _map.et = _12ec[_cc]
    return _map
  }
})()

function formatTime (_time, _format) {
  var _map = _getTimeData(_time)
  _format = _format || 'yyyy-MM-dd'
  _format = '' + _format
  if (!_map || !_format) {
    return _format || ''
  }
  return _format.replace(_map.r, function ($1) {
    var _result = _map[!_map.i ? $1.toLowerCase() : $1]
    return _result != null ? _result : $1
  })
}

export default {
  formatTime
}

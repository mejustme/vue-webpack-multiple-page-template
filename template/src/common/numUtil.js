/**
 * 返回一定范围的随机数
 * @public
 * @param {number} start [start=0] - 最小随机数
 * @param {number} end - [end=1] 最大随机数
 * @returns {number} 随机数
 */
function random (start = 0, end = 1) {
  return start + Math.floor(Math.random() * ((end + 1) - start))
}

export default {
  random
}

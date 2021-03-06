/**
 * 使用尾递归优化求解斐波那契数列
 * 实际函数共执行 n - 1 次，其中计算 n - 2 次
 * @param {number} n 求解斐波那契数列的第 n 项，计数从 1 开始
 * @param {number} sub1 n - 1 的子问题结果
 * @param {number} sub2 n - 2 的子问题结果
 * @returns {number}
 */
const recursive = (n, sub1 = 1, sub2 = 1) => {
  if (n < 3) return sub1
  return recursive(n - 1, sub1 + sub2, sub1)
}

/**
 * 使用迭代法求解斐波那契数列
 * @param {number} n 求解斐波那契数列的第 n 项，计数从 1 开始
 * @returns {number}
 */
const iter = n => {
  if (!n || typeof n !== 'number') return 0
  if (n < 3) return 1
  let sub1 = 1, sub2 = 1
  for (let i = 3; i < n; i++) {
    [sub1, sub2] = [sub1 + sub2, sub1]
  }
  return sub1 + sub2
}

module.exports = {
  recursive,
  iter,
  bi: require('./bi')
}

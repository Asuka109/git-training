/**
 * 使用尾递归优化求解斐波那契数列
 * 实际函数共执行 n - 1 次，其中计算 n - 2 次
 * @param {number} n 求解斐波那契数列的第 n 项，计数从 1 开始
 * @param {number} sub1 n - 1 的子问题结果
 * @param {number} sub2 n - 2 的子问题结果
 * @returns {number}
 */
const fib = (n, sub1 = 1, sub2 = 1) => {
  if (n < 3) return sub1
  return fib(n - 1, sub1 + sub2, sub1)
}

/**
 * 使用尾递归优化求解斐波那契数列
 * 实际函数共执行 n - 1 次，其中计算 n - 2 次
 * @param {bigint} n 求解斐波那契数列的第 n 项，计数从 1 开始
 * @param {bigint} sub1 n - 1 的子问题结果
 * @param {bigint} sub2 n - 2 的子问题结果
 * @returns {bigint}
 */
const fibBI = (n, sub1 = 1n, sub2 = 1n) => {
  if (n < 3n) return sub1
  return fibBI(n - 1n, sub1 + sub2, sub1)
}

module.exports = {
  fib,
  fibBI
}

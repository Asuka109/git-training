/**
 * 使用尾递归优化求解斐波那契数列
 * 实际函数共执行 n - 1 次，其中计算 n - 2 次
 * @param {bigint} n 求解斐波那契数列的第 n 项，计数从 1 开始
 * @param {bigint} sub1 n - 1 的子问题结果
 * @param {bigint} sub2 n - 2 的子问题结果
 * @returns {bigint}
 */
const recursive = (n, sub1 = 1n, sub2 = 1n) => {
  if (n < 3) return sub1
  return recursive(n - 1n, sub1 + sub2, sub1)
}

/**
 * 使用迭代法求解斐波那契数列
 * @param {bigint} n 求解斐波那契数列的第 n 项，计数从 1 开始
 * @returns {bigint}
 */
const iter = n => {
  if (!n || typeof n !== 'bigint') return 0n
  if (n < 3) return 1n
  let sub1 = 1n, sub2 = 1n
  for (let i = 3n; i < n; i++) {
    [sub1, sub2] = [sub1 + sub2, sub1]
  }
  return sub1 + sub2
}

module.exports = {
  recursive,
  iter
}
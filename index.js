/**
 * @param {number} n 
 * @param {number} sub1
 * @param {number} sub2
 * @returns {number}
 */
const fib = (n, sub1 = 1, sub2 = 1) => {
  if (n < 3) return sub1
  return fib(n - 1, sub1 + sub2, sub1)
}

module.exports = fib

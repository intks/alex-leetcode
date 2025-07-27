/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
   if(n === 0) return 0 // 如果 n 為 0，則返回 0
   if(n === 1 || n === 2) return 1 // 如果 n 為 1 或 2，則返回 1

   const dp = new Array(n + 1).fill(0) // 初始化一個長度為 n + 1 的陣列，用於儲存 Tribonacci 數
   dp[0] = 0 // 初始化第 0 個 Tribonacci 數
   dp[1] = 1 // 初始化第 1 個 Tribonacci 數
   dp[2] = 1 // 初始化第 2 個 Tribonacci 數

   for(let i = 3; i <= n; i++) { // 從第 3 個 Tribonacci 數開始，每個 Tribonacci 數等於前 3 個 Tribonacci 數的和
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1] // 第 i 個 Tribonacci 數等於前 3 個 Tribonacci 數的和
   }

   return dp[n] // 返回第 n 個 Tribonacci 數
};
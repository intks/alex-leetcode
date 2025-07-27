/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
   const n = cost.length // 樓梯的長度
   let prev2 = 0 // 前兩步的最小成本
   let prev1 = 0 // 前一步的最小成本

   for(let i = 2; i <= n; i++) { // 從第 2 步開始，每步的最小成本等於前兩步的最小成本的和
    const curr = Math.min(prev1 + cost[i-1], prev2 + cost[i-2]) // 當前的最小成本等於前兩步的最小成本的和
    prev2 = prev1 // 前兩步的最小成本等於前一步的最小成本
    prev1 = curr // 前一步的最小成本等於當前的最小成本
   }

   return prev1 // 返回最後一步的最小成本
};
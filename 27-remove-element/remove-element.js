/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let k = 0 // 創建第一個 pointer

   for(let i = 0; i < nums.length; i++) {    // 第二個 pointer i 遍歷整個陣列
    if(nums[i] !== val) { // 如果 nums[i] 不等於 val
        nums[k] = nums[i] // 將 nums[i] 賦值給 nums[k]
        k++ // 將 k 往前移動
    }
   }

   return k // 返回新的陣列長度
};
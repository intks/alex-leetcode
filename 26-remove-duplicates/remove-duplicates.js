/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 if(!nums.length) return 0 // 如果陣列為空，則返回 0 for edge case

 let k = 1 // 創建第一個 pointer, 之所以從 1 開始是因為第一個元素不會有重複

 for(let i = 1; i < nums.length; i++) { // 第二個 pointer i 遍歷整個陣列
    if(nums[i] !== nums[i - 1]) { // 如果 nums[i] 不等於 nums[i - 1]
        nums[k] = nums[i] // 將 nums[i] 賦值給 nums[k]
        k++ // 將 k 往後移動
    }
 }

 return k
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0] // 創建一個變數來儲存出現次數最多的元素
    let count = 1 // 創建一個變數來儲存出現次數

    for(let i = 1; i < nums.length; i++) {
        if(count === 0) { // 如果 count 為 0，則更新 candidate
            candidate = nums[i]
            count = 1
        } else if (nums[i] === candidate) { // 如果 nums[i] 等於 candidate，則 count 加 1
            count++
        } else { // 如果 nums[i] 不等於 candidate，則 count 減 1
            count--
        }
    }

    return candidate // 返回 candidate
};
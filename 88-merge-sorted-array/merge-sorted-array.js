/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let p1 = m - 1 // 指向 nums1 的末尾
   let p2 = n - 1 // 指向 nums2 的末尾
   let p = m + n - 1 // 指向 nums1 的末尾

   while(p1 >= 0 && p2 >= 0) {
    if(nums1[p1] > nums2[p2]) { // 如果 nums1 的末尾大於 nums2 的末尾
        nums1[p] = nums1[p1] // 將 nums1 的末尾賦值給 nums1 的末尾
        p1-- // 將 p1 往前移動
    } else {
        nums1[p] = nums2[p2] // 將 nums2 的末尾賦值給 nums1 的末尾
        p2-- // 將 p2 往前移動
    }
    p-- // 將 p 往前移動
   }

   while(p2 >= 0) { // 如果還有 nums2 的元素沒有合併
    nums1[p] = nums2[p2]  // 將 nums2 的末尾賦值給 nums1 的末尾
    p2-- // 將 p2 往前移動
    p-- // 將 p 往前移動
   }

   return nums1
};
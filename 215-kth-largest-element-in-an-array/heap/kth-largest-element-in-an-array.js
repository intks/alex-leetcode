/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   const minHeap = []

   for(const num of nums) {
    if(minHeap.length < k) { // 如果 heap 的大小小於 k，則將元素加入堆中
        minHeap.push(num)
        minHeap.sort((a, b) => a - b) // 排序 heap
    } else if (num > minHeap[0]) { // 如果 heap 的大小等於 k，且元素大於 heap 的最小值，則將元素加入堆中
        minHeap[0] = num
        minHeap.sort((a, b) => a - b) // 排序 heap
    }
   }
   return minHeap[0]
};

// 透過不斷的排序 heap，可以確保 heap 的第 0 個元素始終是第 k 大的元素
// 會遇到 LTE ( Time Limit Exceeded ) 的問題，因為排序的時間複雜度是 O(n log n)
// MinHeap 使用陣列和 sort 因 O(n * k log k) 導致 TLE
// 需要換成利用 Bucket Sort 來解決 ( 用空間換時間 )
// 通過預先分配桶並計數頻率，Bucket Sort 避免了排序（O(n log n)）或堆操作（O(n log k)）
// 頻率計數和線性遍歷取代了比較操作，使得時間複雜度從 O(n log n) 或 O(n log k) 降低到 O(n)

var findKthLargest_bucket_sort = function(nums, k) {
   // 定義 bucket array: range [-10^4, 10^4] -> 0 to 20,000
    const offset = 10000; // 轉換負數到正數索引
    const bucket = new Array(20001).fill(0);

   // Step 1: 轉換數字到 bucket 的索引
    for (const num of nums) {
        bucket[num + offset]++;
    }
    
    // Step 2: 從後面開始遍歷 bucket，找到第 k 大的元素
    let count = 0;
    for (let i = 20000; i >= 0; i--) {
        count += bucket[i];
        if (count >= k) {
            return i - offset; // 轉換回原始值
        }
    }
    
    return -1; // 不會到這裡，因為題目保證 k 是有效的
}
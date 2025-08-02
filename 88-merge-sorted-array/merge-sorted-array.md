## Merge Sorted Array

- 題目：https://leetcode.com/problems/merge-sorted-array/
- 難度：Easy
- 類型：Array
- 適合使用：Two Pointers

## 題目

這道題目是將兩個排序好的陣列合併成一個排序好的陣列。
要求直接在 nums1 上進行合併，並且合併後的結果也必須是排序好的。

## 想法

1. 使用兩個指標來指向 nums1 和 nums2 的末尾
2. 比較兩個指標的值，將較大的值插入到 nums1 的末尾
3. 如果其中一個指標已經到達陣列的開頭，則將另一個指標的值插入到 nums1 的開頭
4. 最後返回 nums1

## 複雜度分析

### 時間複雜度：O(m + n)
### 空間複雜度：O(1)

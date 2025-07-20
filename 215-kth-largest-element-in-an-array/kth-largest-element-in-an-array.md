## Kth Largest Element in an Array

- 題目：https://leetcode.com/problems/kth-largest-element-in-an-array/
- 難度：Medium
- 類型：Array
- 適合使用：Heap, Quick Select

## 題目

這道題目是尋找一個陣列中第 k 大的元素。

## 想法

1. 使用 Heap 來找到第 k 大的元素
2. 使用 Quick Select 來找到第 k 大的元素

## Heap 解法

1. 建立一個 Heap
2. 將陣列中的元素加入 Heap 中
3. 當 Heap 的大小超過 k 時，移除 Heap 的第 0 個元素
4. 最後 Heap 的第 0 個元素就是第 k 大的元素

## Quick Select 解法

1. 選擇一個基準（pivot），將陣列分為兩部分：大於等於基準的元素和小於基準的元素。
2. 根據基準的最終位置，判斷第 k 大元素位於左子陣列、右子陣列，還是基準本身。
3. 遞迴處理相關子陣列，直到找到第 k 大元素。

## 複雜度分析

### Heap 解法

1. 時間複雜度：O(n log n)
2. 空間複雜度：O(n)

### Quick Select 解法

1. 時間複雜度：O(n)
2. 空間複雜度：O(1)

## Remove Duplicates from Sorted Array

- 題目：https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- 難度：Easy
- 類型：Array
- 適合使用：Two Pointers

## 題目

這道題目是移除排序陣列中的重複元素，並回傳新的陣列長度。
要求要 in-place 操作，不能使用額外的空間。

## 想法

這道題目使用 **Two Pointers**

1. **第一個指針 `k`**：用來標記下一個要放置非重複元素的位置
2. **第二個指針 `i`**：用來遍歷整個陣列，尋找非重複元素

### 步驟：

1. 初始化 `k = 1`，表示從陣列開頭開始放置
2. 遍歷陣列，對於每個元素 `nums[i]`：
   - 如果 `nums[i] !== nums[i - 1]`（不是重複元素）
   - 則將 `nums[i]` 放到 `nums[k]` 的位置
   - 然後 `k++`，準備下一個位置
3. 最後返回 `k`，即為新陣列的長度

### 說明：
```
輸入：nums = [1,1,2]

步驟：
- i=1: nums[1]=1, 等於 nums[0]，跳過，k=1
- i=2: nums[2]=2, 不等於 nums[1]，nums[1]=2, k=2

結果：nums = [1,2,2]，返回 k=2
```

## 複雜度分析

### 時間複雜度：O(n)
### 空間複雜度：O(1)
## Majority Element

- 題目：https://leetcode.com/problems/majority-element/
- 難度：Easy
- 類型：Array
- 適合使用：Voting Algorithm

## 題目

這道題目是求解陣列中出現次數最多的元素。

## 想法

1. 使用 Voting Algorithm 來求解
2. 創建一個變數來儲存出現次數最多的元素
3. 創建一個變數來儲存出現次數
4. 遍歷整個陣列，如果當前元素等於出現次數最多的元素，則出現次數加 1
5. 如果當前元素不等於出現次數最多的元素，則出現次數減 1
6. 如果出現次數為 0，則更新出現次數最多的元素

## 複雜度分析

### 時間複雜度：O(n)
### 空間複雜度：O(1)
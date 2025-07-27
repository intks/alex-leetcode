## Is Same Tree

- 題目：https://leetcode.com/problems/is-same-tree/
- 難度：Easy
- 類型：Tree
- 適合使用：Recursion

## 題目

這道題目是判斷兩個二元樹是否相同。

## 想法

1. 遞迴判斷兩個二元樹的左子樹和右子樹是否相同
2. 如果兩個二元樹的左子樹和右子樹都相同，則返回 true
3. 如果兩個二元樹的左子樹或右子樹不相同，則返回 false
4. 如果兩個二元樹都為 null，則返回 true
5. 如果兩個二元樹只有一個為 null，則返回 false

## 遞迴解法

## 複雜度分析

### 時間複雜度：O(n)
### 空間複雜度：O(n)
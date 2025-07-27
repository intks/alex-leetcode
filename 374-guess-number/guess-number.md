## Guess Number

- 題目：https://leetcode.com/problems/guess-number/
- 難度：Easy
- 類型：Binary Search
- 適合使用：Binary Search

## 題目

這道題目是猜數字遊戲，給定一個範圍，需要猜出答案。

## 想法

1. 使用二分搜尋法來猜數字
2. 如果猜的數字比答案大，則右邊界移動到中間值 - 1
3. 如果猜的數字比答案小，則左邊界移動到中間值 + 1
4. 如果猜的數字等於答案，則返回中間值

## 複雜度分析

### 時間複雜度：O(log n)
### 空間複雜度：O(1)
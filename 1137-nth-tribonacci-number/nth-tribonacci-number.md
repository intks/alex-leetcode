## Nth Tribonacci Number

- 題目：https://leetcode.com/problems/nth-tribonacci-number/
- 難度：Easy
- 類型：Dynamic Programming
- 適合使用：Dynamic Programming, Recursion

## 題目

這道題目是求第 n 個 Tribonacci 數。

## 想法

1. 使用動態規劃來求解
2. 建立一個陣列來儲存 Tribonacci 數
3. 初始化前 3 個 Tribonacci 數
4. 從第 3 個 Tribonacci 數開始，每個 Tribonacci 數等於前 3 個 Tribonacci 數的和
5. 最後返回第 n 個 Tribonacci 數

## 複雜度分析

### 時間複雜度：O(n)
### 空間複雜度：O(n)
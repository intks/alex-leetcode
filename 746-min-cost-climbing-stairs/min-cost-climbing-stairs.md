## Min Cost Climbing Stairs

- 題目：https://leetcode.com/problems/min-cost-climbing-stairs/
- 難度：Easy
- 類型：Dynamic Programming
- 適合使用：Dynamic Programming

## 題目

這道題目是求解爬樓梯的最小成本。

## 想法

1. 使用動態規劃來求解
2. 建立一個陣列來儲存最小成本
3. 初始化前 2 個最小成本
4. 從第 3 個最小成本開始，每個最小成本等於前 2 個最小成本的和
5. 最後返回第 n 個最小成本

## 複雜度分析

### 時間複雜度：O(n)
### 空間複雜度：O(n)
## Best Time to Buy and Sell Stock

- 題目：https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
- 難度：Easy
- 類型：Array
- 適合使用： Greedy Algorithm

## 題目

這道題目是求解買賣股票的最佳時機。

## 想法

1. 使用 Greedy Algorithm 來求解
2. 創建一個變數來儲存最低價
3. 創建一個變數來儲存最大利潤
4. 遍歷整個陣列，如果當前價格低於最低價，則更新最低價
5. 如果當前價格高於最低價，則計算當前價格 - 最低價，並更新最大利潤
6. 最後返回最大利潤

## 複雜度分析

### 時間複雜度：O(n)
### 空間複雜度：O(1)

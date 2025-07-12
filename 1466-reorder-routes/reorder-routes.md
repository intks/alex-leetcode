# Reorder routes to make all paths lead to the city zero

## 題目
- **題目**: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
- **難度**: Medium
- **類型**: Graph
- **適合使用**: BFS, DFS

## 想法
- 建立一個圖，用來存城市之間的連接
- 使用 BFS 來遍歷所有城市，並將所有相連的城市設為已訪問
- 使用一個陣列來記錄城市是否被訪問過
- 使用一個變數來記錄需要改變的連接數
- 使用一個 Queue 來儲存城市，並且將城市加入 Queue，並且將城市設為已訪問
- 最後返回需要改變的連接數

## 複雜度分析

### 時間複雜度分析：O(n)

#### 外層循環
- `for(const [from, to] of connections)`
- 這個循環會執行 n 次（n 是連接的數量）

#### 內層處理
- 對於每個連接
- BFS 遍歷：使用 while 循環和內層 for 循環
- 內層 for 循環：`for(const [neighbor, direction] of graph[city])`
  - 這個循環也會執行 n 次（n 是城市的數量）

#### 最壞情況分析
- 在最壞情況下，每個城市都需要檢查與其他所有城市的連接
- 外層循環：O(n)

### 空間複雜度分析：O(n)
- 使用了一個圖，用於儲存城市之間的連接，大小為 n
- 使用了一個陣列來記錄城市是否被訪問過，大小為 n
- 使用了一個 Queue 來儲存城市，大小為 n
- 總計：O(n) + O(n) + O(n) = O(n)

## 答案
- **時間複雜度**: O(n)
- **空間複雜度**: O(n)
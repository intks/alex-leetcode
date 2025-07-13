** Nearest Exit from Entrance in Maze **

- 題目：https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
- 難度：Medium
- 類型：Graph
- 適合使用：BFS

## 想法

最短路徑問題，需要找到從入口到最近出口的最短距離。

1. 使用 BFS（廣度優先搜索）來尋找最短路徑
2. 從入口開始，逐層探索相鄰的格子
3. 當到達迷宮邊界且不是入口時，即為出口
4. 使用 Queue 來實現 BFS，確保先探索距離較近的格子
5. 使用 Set 來記錄已訪問的格子，避免重複訪問

- 出口定義：位於迷宮邊界（row === 0 或 row === m-1 或 col === 0 或 col === n-1）且不是入口
- 只能走 '.' 格子，不能走 '+' 牆壁
- 四個方向：上、下、左、右

## 複雜度分析

### 時間複雜度分析：O(m × n)
- 最壞情況下需要訪問迷宮中的每個格子
- m 是行數，n 是列數

### 空間複雜度分析：O(m × n)
- Queue 最多可能包含所有格子
- visited Set 最多可能包含所有格子
- 在最壞情況下，空間複雜度為 O(m × n)

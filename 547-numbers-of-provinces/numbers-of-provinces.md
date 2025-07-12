** Number of Provinces **

- 題目：https://leetcode.com/problems/number-of-provinces
- 難度: Medium
- 類型: Graph
- 適合使用: BFS, DFS, Union Find
- 解題思路：
  - 使用 BFS 來遍歷所有城市，並將所有相連的城市設為已訪問
  - 使用一個陣列來記錄城市是否被訪問過
  - 使用一個 Queue 來儲存城市，並且將城市加入 Queue
  - 使用一個變數來記錄省的數量，當 Queue 為空時，表示已經遍歷完所有城市，並且省的數量加 1
  - 最後返回省的數量



- 分析複雜度
  - 時間複雜度分析：O(n²)
  - 外層循環
    - for(let i = 0; i < n; i ++)
    - 這個循環會執行 n 次（n 是城市的數量）
  - 內層處理
    - 對於每個未訪問的城市 i：
    - BFS 遍歷：使用 while 循環和內層 for 循環
    - 內層 for 循環：
      - for(let j = 0; j < n; j ++)
        - 這個循環也會執行 n 次
  - 最壞情況分析
    - 在最壞情況下，每個城市都需要檢查與其他所有城市的連接
    - 外層循環：O(n)
    - 內層 for 循環：O(n)
    - 總計：O(n) × O(n) = O(n²)
    
  - 空間複雜度分析：O(n)
    - 使用了一個陣列來記錄城市是否被訪問過，大小為 n
    - 使用了一個 Queue 來儲存城市，大小為 n
    - 總計：O(n) + O(n) = O(n)

- 解題答案
  - 時間複雜度: O(n^2)
  - 空間複雜度: O(n)
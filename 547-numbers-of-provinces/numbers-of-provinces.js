/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length // 先定義城市的數量
  const visited = new Array(n).fill(false) // 定義一個陣列來記錄城市是否被訪問過

  let provinces = 0 // 定義省的數量
  const queue = [] // 定義一個 Queue 來儲存城市

  for(let i = 0; i < n; i ++) {
    if(!visited[i]) { // 如果城市沒有被訪問過
      queue.push(i) // 將城市加入 Queue
      visited[i] = true // 將城市設為已訪問

      while(queue.length > 0) { // 當 Queue 不為空時
        const city = queue.shift() // 從 Queue 中取出城市

        for(let j = 0; j < n; j ++) { // 遍歷所有城市
          if(isConnected[city][j] === 1 && !visited[j]) { // 如果城市之間有連接且沒有被訪問過
            queue.push(j) // 將城市加入 Queue
            visited[j] = true // 將城市設為已訪問
          }
        }
      }

      provinces++ // 省的數量加 1
    }
  }

  return provinces
}

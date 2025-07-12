/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = new Array(n).fill(0).map(() => []) // 建立一個圖，用於儲存城市之間的連接

    for(const [from, to] of connections) {
        graph[from].push([to, 1]) // 將 from 城市到 to 城市的連接設為 1
        graph[to].push([from, 0]) // 將 to 城市到 from 城市的連接設為 0
    }

    const visited = new Array(n).fill(false) // 建立一個陣列，用於儲存城市是否被訪問過
    const queue = [0] // 建立一個 Queue，用於儲存城市
    visited[0] = true // 將 0 城市設為已訪問
    let changes = 0 // 建立一個變數，用於儲存需要改變的連接數

    while(queue.length > 0) { // 當 Queue 不為空時
        const city = queue.shift() // 從 Queue 中取出城市
        for(const [neighbor, direction] of graph[city]) { // 遍歷城市之間的連接
            if(!visited[neighbor]) { // 如果城市沒有被訪問過
                visited[neighbor] = true // 將城市設為已訪問
                queue.push(neighbor) // 將城市加入 Queue
                changes += direction // 將需要改變的連接數加上 direction (1 表示需要改變，0 表示不需要改變)
            }
        }
    }

    return changes
}
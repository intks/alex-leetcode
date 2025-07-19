/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
   const m = grid.length
   const n = grid[0].length
   const queue = []
   let freshCount = 0
   let minutes = 0

   for(let i = 0; i < m; i ++) {
    for(let j = 0; j < n; j ++) {
        if(grid[i][j] === 2) { // 腐爛橘子
            queue.push([i, j])
        } else if(grid[i][j] === 1) { // 新鮮橘子
            freshCount ++
        }
    }
   }

   if(freshCount === 0) return 0 // 如果沒有新鮮橘子，則返回 0

   const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 四個方向

   while(queue.length > 0) {
    const levelSize = queue.length
    for(let i = 0; i < levelSize; i ++) {
        const [row, col] = queue.shift()
        for(const [dx, dy] of directions) {
            const newRow = row + dx
            const newCol = col + dy
            
            if(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 2
                queue.push([newRow, newCol])
                freshCount --
            }
        }
    }
    minutes++
   }

   return freshCount === 0 ? minutes - 1 : -1
};
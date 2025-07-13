/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length; // 定義行數
    const n = maze[0].length; // 定義列數
    const queue = [[entrance[0], entrance[1], 0]]; // [row, col, steps]
    const visited = new Set([`${entrance[0]},${entrance[1]}`]); // 紀錄已經到達過的座標
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 上、下、左、右四個方向
    
    while (queue.length > 0) {
        const [row, col, steps] = queue.shift(); // 取出當前座標和步數
        
        // 檢查是否為出口（邊界且不是入口），如果是則返回步數
        if ((row === 0 || row === m - 1 || col === 0 || col === n - 1) &&
            (row !== entrance[0] || col !== entrance[1]) &&
            maze[row][col] === '.') {
            return steps;
        }
        
        // 探索四個方向
        for (const [dr, dc] of directions) {
            const newRow = row + dr; // 計算新座標
            const newCol = col + dc; // 計算新座標
            
            // 檢查新位置是否合法，如果是則將新座標加入 Queue 和 Set
            if (newRow >= 0 && newRow < m &&
                newCol >= 0 && newCol < n &&
                maze[newRow][newCol] === '.' &&
                !visited.has(`${newRow},${newCol}`)) {
                queue.push([newRow, newCol, steps + 1]);
                visited.add(`${newRow},${newCol}`);
            }
        }
    }
    
    return -1; // 無出口可達
};
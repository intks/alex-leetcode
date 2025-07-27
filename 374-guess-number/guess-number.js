/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
   let left = 1 // 左邊界
   let right = n // 右邊界

   while(left <= right) {
    const middle = left + Math.floor((right - left) / 2) // 取中間值
    const result = guess(middle) // 呼叫 guess API

    if(result === 0) { // 如果中間值等於答案，則返回中間值
        return middle
    }

    if(result === 1) { // 如果中間值小於答案，則左邊界移動到中間值 + 1
        left = middle + 1
    }

    if(result === -1) { // 如果中間值大於答案，則右邊界移動到中間值 - 1
        right = middle - 1
    }
   }

   // 這邊不會進來，因為在 while loop 中，當 left <= right 時，一定會找到答案
   return left
};
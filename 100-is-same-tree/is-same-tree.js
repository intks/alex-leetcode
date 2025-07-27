/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true // 兩個都為 null，則返回 true
    if(!p || !q) return false // 兩個只有一個為 null，則返回 false
    if(p.val !== q.val) return false // 兩個的值不相等，則返回 false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) // 遞迴判斷兩個二元樹的左子樹和右子樹是否相同
};
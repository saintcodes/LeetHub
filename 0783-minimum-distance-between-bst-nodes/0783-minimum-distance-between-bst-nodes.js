/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let stack = [root]
    let diff = []

    //stack = [4, [2, [1, 3] 6]]
    //current = above
    //diff
    
    while(stack.length > 0) {
        let current = stack.pop()
        diff.push(current.val)
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)   
    }
    diff.sort((a, b) => b-a)
    let min = Infinity
    for (let i = 0; i < diff.length; i++) {
        min = diff[i] - diff[i+1] < min ? diff[i] - diff[i+1] : min
    }
    return min
};  

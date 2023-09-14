/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let res = 0
    
    for (let i=2; i<cost.length; i++) {
        // console.log(i, cost[i])
        cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1])
    }
    let first=cost.pop()
    let second=cost.pop()
    return Math.min(first, second)
    // return Math.min(cost[cost.length-1], cost[cost.length-2])
};
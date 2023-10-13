/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let res = 0

// index = [0,  1 , 2, 3, 4,  5 , 6, 7,  8 , 9]   
        // [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// eval =           2, 3, 3, 103, 4, 5, 104, 6
    
    for (let i=2; i<cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1])
    }

    return Math.min(cost[cost.length-1], cost[cost.length-2])
};
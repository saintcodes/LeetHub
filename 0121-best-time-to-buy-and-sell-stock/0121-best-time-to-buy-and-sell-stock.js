/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let max = 0
    let lowest = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
        }
        if (prices[i] - lowest > max) {
            max = prices[i] - lowest
            // console.log(max, prices[i], prices[i+1])
        }
    }
    return max
};
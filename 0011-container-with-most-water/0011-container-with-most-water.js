/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let max = 0

    while (left < right) {
        let lowest = Math.min(height[left], height[right])
        let length = right-left
        let current = length*lowest
        // console.log(height[left], height[right], length, lowest, current)
        if (current > max) {
            max = current
        }
        height[left] < height[right] ? left++ : right--
    }
return max
}
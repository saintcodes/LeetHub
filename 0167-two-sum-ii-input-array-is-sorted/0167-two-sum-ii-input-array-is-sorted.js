/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let left = 0, right = numbers.length-1
   let indices = []
   while (left < right) {
       if (numbers[left] + numbers[right] > target) {
           right--
       } else if (numbers[left] + numbers[right] === target) {
           indices.push(left+1)
           indices.push(right+1)
           break
       } else {
        left++
       }
   }
    return indices 
};
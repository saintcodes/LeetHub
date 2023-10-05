/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let max = -Infinity, arrs = [], sum = 0
  nums.sort((a,b) => a-b)
  for (let i=0, j=1; j<nums.length; i+=2, j+=2) {
      arrs.push([nums[i], nums[j]])
  }
    for (let arr of arrs) {
        sum += Math.min(...arr)
    }
    return sum
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // let max = nums.lastIndexOf(Math.max(...nums));
    // nums = nums.slice(0, max+1)
    // let count = 0
    // for (let i = 0; i < nums.length-1; i++) {
    //     for (let j = i+1; j< nums.length; j++) {
    //         if 
    //     }
    // }
     let arr = new Array(nums.length).fill(1);
	
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
    }
  }
  
  return Math.max(...arr);
};
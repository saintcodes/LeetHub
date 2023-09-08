/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let sum = Infinity
    for (let i=0; i< nums.length; i++) {
        let left = i+1, right = nums.length-1
        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right]
            if (Math.abs(currSum-target) < Math.abs(sum-target)) sum = currSum
            if (currSum > target) right--
            else if (currSum < target) left++
            else return currSum
        }
    }
    return sum
};
    

//      for (let i = 0; i < nums.length; i += 1) {
//     let [left, right] = [i + 1, nums.length - 1];
//     if (nums.length === 3) return nums[0] + nums[1] + nums[2];
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (Math.abs(sum - target) < Math.abs(closest - target)) {
//         closest = sum;
//       }
//       if (sum > target) {
//         right--;
//       } else if (sum < target) {
//         left++;
//       } else {
//         return sum;
//       }
//     }
//   }

//   return closest;
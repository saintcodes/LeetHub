/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
//     let sum = nums.reduce((acc, cum) => acc+cum)
//     if (sum < x) return -1
//     let maxLength=-1, l=0, r=0, currSum=0

// //  [1,1,4,2,3]
// //  [l]
// //  [    r]
// //  currSum = 6
//     while (r<nums.length) {
//         if (currSum <= sum-x) {
//             currSum+=nums[r]
//             console.log('right:', r, nums[r], currSum)
//             r++
//         } else if (currSum > sum-x){
//             currSum-=nums[l]
//             console.log('left:', l, nums[l], currSum)
//             l++
//             // r++
//         }
//         if (currSum == (sum-x)) {
//             console.log(r, l)
//             maxLength = Math.max(maxLength, (r-l)+1)
//             console.log('max', maxLength)
//         }
//     }
    
//     return maxLength == -1 ? -1 : nums.length-maxLength
// };

  const n = nums.length;
    const sum = nums.reduce((r, n) => r + n, 0);
    const target = sum - x;
    let current = 0;
    let result = -1;
    for (let l = 0, r = 0; r < n; r++) {
        current += nums[r];
        while (current > target) {
            current -= nums[l];
            l++;
        }
        if (current === target) {
            result = Math.max(result, r - l + 1);
        }
    }
    return result === -1 ? -1 : n - result;
}
/**
 * @param {number[]} nums
 * @return {number}
 */

// [2,2,3,2]
// res
//    i

var singleNumber = function(nums) {
    for (const i of nums) {
        if (nums.filter(x => x === i).length == 1) {
            return i;
        }
    }
}
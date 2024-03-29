/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length)
    
    for (let i=0; i < nums1.length; i++) {
        for (let j=0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                let result = nums2.slice(j).find((num) => num > nums2[j])
                ans[i] = result 
            }
            if (!ans[i]) ans[i] = -1
        }
    }
    return ans
};
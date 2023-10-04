/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    for (let i=0; i< nums1.length; i++) {
        if (nums2.includes(nums1[i])) return nums1[i]
    }
    return -1
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let n1Set = new Set(nums1)
    return [...n1Set].filter((n) => nums2.includes(n))
    // return res
};
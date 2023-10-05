/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let n1Set = new Set(nums1)
    let n2Set = new Set(nums2)
    let res = [...n1Set].filter((n) => n2Set.has(n))
    return res
};
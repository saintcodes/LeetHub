/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// nums = [-4,-1,-1,0,1,2]
//          i          
//             j       
//                      k
// [-4,-1,2]
// [-4,-1,2]
// [-4,0,2]
// [-4,1,2]


var threeSum = function(nums) {
    let answer = []
	if (nums.length < 3) return answer
	let sorted = nums.sort((a, b) => a - b)

	for (let i = 0; i < sorted.length - 2; i++) {
		
		if (sorted[i] > 0) break
		if (i > 0 && sorted[i] === sorted[i - 1]) continue
		let j = i + 1, k = sorted.length - 1

		while (j < k) {
			let sum = sorted[i] + sorted[j] + sorted[k]

			if (sum === 0) {
				answer.push([sorted[i], sorted[j], sorted[k]])
				while (sorted[j] === sorted[j + 1]) j++
				while (sorted[k] === sorted[k - 1]) k--
				j++
				k--
			} else if (sum < 0) {
				j++
			} else {
				k--
			}
		}
	}

	return answer
};
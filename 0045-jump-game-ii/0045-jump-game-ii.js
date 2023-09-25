/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currBeg = 0, currEnd = 0, jumps = 0;
    
    while(currEnd < nums.length-1){
        let maxReach = 0;
        for(let i=currBeg; i<currEnd+1; i++){
            console.log('nums[i]:', nums[i])
            console.log(`i=${i}`, 'nums[i]+i:', nums[i]+i)
            maxReach = Math.max(maxReach, nums[i]+i);
            console.log('maxReach:', maxReach)
        }
        currBeg = currEnd+1;
        currEnd = maxReach;
        console.log(currBeg, currEnd)
        jumps++;
        if (currEnd > nums.length-1) return jumps

    }
    return jumps;
};
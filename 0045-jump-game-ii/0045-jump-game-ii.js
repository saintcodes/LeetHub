/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l = 0, r = 0, jumps = 0;
    
    while(r < nums.length-1){
        let maxReach = 0;
        for(let i=l; i<r+1; i++){
            console.log('nums[i]:', nums[i], 'i:', i, nums[i]+i)
            maxReach = Math.max(maxReach, nums[i]+i);
            console.log('maxReach:', maxReach)
        }
        l = r+1;
        r = maxReach;
        jumps++;
    }
    return jumps;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var subsets = function(nums) {
    const result = []
    const partialSolution = []
    helper(0, partialSolution, nums, result)
    return result
    
};

const helper = (index, path, input, output) => {
    //base case
    if (index === input.length) {
        //make a copy of path and push copy of path to output
        output.push([...path])
        return
    }
    
    //recursive calls
        //exclusion
    helper(index+1, path, input, output)
    
    
        //inclusion
    path.push(input[index])
    helper(index+1, path, input, output)
    path.pop()
    
    return
}


    // recursive functions:
    //     - base case (i === nums.length)
    // recursive call(s)
    //     - exclusion
    //     - inclusion
    // converge towards base case
    //     - exclusion
    //         - i++
    //     - inclusion
    //         - i++
    //         - add current element to path
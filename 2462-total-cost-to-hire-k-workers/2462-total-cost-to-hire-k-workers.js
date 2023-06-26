/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
   //  let count = k
   //  let cost = 0
   //  while ( count !== 0 ) {
   //      if (costs.length <= candidates*2) {
   //          let lowest = Math.min(...costs)
   //          let ind = costs.indexOf(lowest)
   //          cost+=lowest
   //          count--
   //          costs.splice(ind, 1)
   //      } else {
   //          let left = [...costs].splice(0,candidates)
   //          let right = [...costs].splice(costs.length-candidates, costs.length-1)
   //          let leftLow = Math.min(...left)
   //          let rightLow = Math.min(...right)
   //          if (leftLow <= rightLow) {
   //              cost+= leftLow
   //              count--
   //              costs.splice(left.indexOf(leftLow), 1)
   //          } else {
   //              cost+= rightLow
   //              count--
   //              let fromRight = costs.length-candidates
   //              costs.splice(costs.indexOf(rightLow, fromRight), 1)
   //          }
   //      }
   // }
   //  return cost
    const binSearch = (arr, target) => {
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (arr[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };


    if(costs.length <= candidates * 2) return costs.sort((a,b)=>a-b).slice(0, k).reduce((a,c)=>a+c,0);
    if(costs.length === k) return costs.reduce((a,c) => a+c, 0)
    
    const left = costs.slice(0, candidates);
    const middle = costs.slice(candidates, costs.length - candidates);
    const right = costs.slice(costs.length - candidates, costs.length);
    left.sort((a,b)=>a-b);
    right.sort((a,b)=>a-b);

    const selected = [];

    while(selected.length < k) {
        if(left[0] <= right[0]) {
            selected.push(left.shift());
            const n = middle.shift();
            left.splice(binSearch(left, n), 0, n);
        }
        else {
            selected.push(right.shift());
            const n = middle.pop();
            right.splice(binSearch(right, n), 0, n);
        }
    }
    console.log(selected)
    return selected.reduce((a,c) => a+c, 0);
};

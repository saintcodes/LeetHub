/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let num = salary.length-2
    let remove = Math.max(...salary) + Math.min(...salary)
    let sum = 0
    for (let i=0; i< salary.length; i++) {
        sum += salary[i]
    }
    return (sum-remove)/num
};
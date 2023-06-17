/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    //base case
    if (s.length !== goal.length) return false
    if (s.length <2) return false
    
    //split 's' into array, checks if any differences, if so, push the index to diff array
    let temp = s.split('')
    let diff = []
    for (let i=0; i<s.length; i++) {
        if (s[i] !== goal[i]) diff.push(i)
    }
    
    //if diff array length > 0, reassign and check if temp === goal
    if (diff.length>0) {
        let first = temp[diff[0]]
        temp[diff[0]] = temp[diff[1]]
        temp[diff[1]] = first
        if (temp.join('') === goal) return true
    }
    
    //if strings are equal, create a map and update counter
    if (s === goal) {
        let sMap = new Map()
        for (let i =0; i<s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) +1
        }
        //checks if there's only 1 key in the map, if so, return true ie., 'aaa' === 'aaa'
        if (Object.keys(sMap).length == 1) {
            return true
        } else {
            for (val in sMap) {
                if (sMap[val] > 1) return true
            }
        }
    }
    return false
};
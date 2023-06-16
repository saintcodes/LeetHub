/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (bills[0] !== 5) return false
    let drawer = new Map()
    
    for (let i=0; i< bills.length; i++) {
        drawer[bills[i]] = (drawer[bills[i]] || 0) +1
        
        if (bills[i] === 10 && drawer[5]) {
            drawer[5]--
        }
        
        if (bills[i] === 20 && drawer[10] && drawer[5]) {
            drawer[5]--
            drawer[10]--
        } else if (bills[i] === 20 && drawer[5] >=3) {
            drawer[5]-=3
        } else if (bills[i] === 20 && drawer[5] <=2) {
            return false
        }
    }
    console.log(drawer)

    return true
};
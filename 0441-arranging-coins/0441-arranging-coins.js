/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let stairs = 0;
    
    while(stairs <= n) { 
        n -= stairs
        stairs++
        
        // 1/ stairs=0
        //n (5) -= stairs(0) 
        //stairs++ (1)

        // 2/ stairs = 1
        //n (5) -= stairs(1) = 4
        //stairs++ (2)

        // 3/ stairs = 2
        //n (4) -= stairs(2) = 2
        //stairs++ (3)

    }
    
    return stairs-1
    
};
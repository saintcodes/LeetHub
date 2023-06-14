/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    let unguarded = (m*n) - guards.length - walls.length
    //unguarded = (4*6) - 3 - 3 = 18
    
    //creates 2D array structure based on m * n
    let arr = new Array(m)
    for (let i=0; i < m; i++) {
        arr[i] = Array(n).fill("u");
    }
    
    //assigns "G" to each guard position
    for (let i=0; i<guards.length; i++) {
        const [r,c] = guards[i]
        arr[r][c] = "G"
    }
    
    // assigns "W" to each wall position
    for (let i=0; i<walls.length; i++) {
        const [r,c] = walls[i]
        arr[r][c] = "W"
    }
    
    // console.log(m, n)
    
    guards.forEach((guard) => checkAll(guard))
    
    function checkAll(guard) {
        const [i,j] = guard
        checkS(i,j, arr)
        checkN(i,j, arr)
        checkE(i,j, arr)
        checkW(i,j, arr)
    }
  
    
    function checkS (r,c, arr) {
        if (r === m-1) return
        r+=1
        while (r<m) {
            if (arr[r][c] === "W" || arr[r][c] === "G") break
            if (arr[r][c] === "u") {
                arr[r][c] = 'g'
                unguarded--
                r++
            } else {
                r++
                continue
            }
        }
    }
    
    function checkN (r,c, arr) {
        if (r === 0) return
        r-=1
        while (r>=0) {
            if (arr[r][c] === "W" || arr[r][c] === "G") break
            if (arr[r][c] === "u") {
                arr[r][c] = 'g'
                unguarded--
                r--
            } else {
                r--
                continue
            }
        }
    }
    
    function checkE (r,c, arr) {
        if (c === n-1) return
        c+=1
        while (c<n) {
            if (arr[r][c] === "W" || arr[r][c] === "G") break
            if (arr[r][c] === "u") {
                arr[r][c] = 'g'
                unguarded--
                c++
            } else {
                c++
                continue
            }
        }
    }
    
    function checkW (r,c, arr) {
        if (c === 0) return
        c-=1
        while (c>=0) {
            if (arr[r][c] === "W" || arr[r][c] === "G") break
            if (arr[r][c] === "u") {
                arr[r][c] = 'g'
                unguarded--
                c--
            } else {
                c--
                continue
            }
        }
    }
    return unguarded    
};
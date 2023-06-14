/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    // let rows = grid
    let columns = []

    for (let c = 0; c < grid[0].length; c++) {
        let column = []
        for (let r = 0; r < grid.length; r++) {
            column.push(grid[r][c])
        }
        columns.push(column)
    }
    
    let same = 0
    
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j <grid.length; j++) {
            if (grid[j] + "" === columns[i] + "") same++
        }
    }
    
    return same

};
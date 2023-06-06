/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let count = 0
    let rookRow 
    let rookColumn
    
    [
        [".",".",".",".",".",".","p","."],
        ["p",".",".",".",".",".","R","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".","p","."]
    ]
    for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 'R') {
                rookRow = i
                rookColumn = j
                break
            }
		}
    }
        
    const checkLeft = (board, i, j) => {
        while (j>-1) {
            if (board[i][j] === "B") break
            if (board[i][j] === "p") {
                count++
                break
            } else {
                j--
                continue
            }
        }
    }
    
    const checkRight = (board, i, j) => {
        while (j<8) {
            if (board[i][j] === "B") break
            if (board[i][j] === "p") {
                count++
                break
            } else {
                j++
                continue
            }
        }
    }
    
    const checkUp = (board, i, j) => {
        while (i>-1) {
            if (board[i][j] === "B") break
            if (board[i][j] === "p") {
                count++
                break
            } else {
                i--
                continue
            }
        }
    }

    const checkDown = (board, i, j) => {
        while (i<8) {
            if (board[i][j] === "B") break
            if (board[i][j] === "p") {
                count++
                break
            } else {
                i++
                continue
            }
        }
    }
    
    checkLeft(board, rookRow, rookColumn)
    checkRight(board, rookRow, rookColumn)
    checkUp(board, rookRow, rookColumn)
    checkDown(board, rookRow, rookColumn)
    
    return count
};


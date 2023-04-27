
function buildBoard() {
    let board = []
    for (let i = 0; i < 8; i++) {
        board.push([])
        for(let j = 0; j < 8; j++) {
            board[i].push('')
        }
    }


    //for(let i = 0; i < 8; i++) {
        //board[1][i] = 'bp'
        //board[6][i] = 'wp'
    //}


    board[7][0] = 'wr'
    board[7][1] = 'wn'
    board[7][2] = 'wb'
    board[7][3] = 'wk'
    board[7][4] = 'wq'
    board[7][5] = 'wb'
    board[7][6] = 'wn'
    board[7][7] = 'wr'

    board[0][0] = 'br'
    board[0][1] = 'bn'
    board[0][2] = 'bb'
    board[0][3] = 'bk'
    board[0][4] = 'bq'
    board[0][5] = 'bb'
    board[0][6] = 'bn'
    board[0][7] = 'br'

    return board
}

function updateBoard(oldBoard) {
    let newBoard = []
    for (let x = 0; x < 8; x++) {
        newBoard.push([])
        for(let y = 0; y < 8; y++) {
            try {newBoard[x].push(oldBoard[x][y].props.piece? oldBoard[x][y].props.piece : oldBoard[x][y])}
            catch {
                newBoard[x].push(oldBoard[x][y])
            }
        }
    }

    return newBoard
}

export {buildBoard, updateBoard}
import React from "react"
import './Pieces.css'




function Chess() {

    // Chess Board Declarations:
    let board = []
    // Builds the board it self:
    for (let i = 0; i < 8; i++) {
        board.push([])
        for(let j = 0; j < 8; j++) {
            board[i].push('')
        }
    }


    for(let i = 0; i < 8; i++) {
        board[2][i] = 'wk'
    }
    console.log(board)

    for (let x = 0; x < 8; x++) {
        for(let y = 0; y < 8; y++) {
            board[x][y] ?
            board[x][y] = <div key={`${x}${y}`} className="piece wp"></div> :
            null
        }
    }

    return ( 
        <div className="chess-board" >
            {board}
            {console.log(board)}
        </div>
     )
}

export default Chess
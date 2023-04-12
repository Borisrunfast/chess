import React from "react"


function Chess() {
    const ChessBoard = new Array(64).fill(<div className="chess-pallet">s</div>)

    return ( 
        <div className="chess-board">
            {ChessBoard}
        </div>
     )
}

export default Chess
import React from "react"
import pieceUrl from './piecesData'
import './Pieces.css'
import Piece from "./Piece"



function Chess() {
    // Chess Board Declarations:
    const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const y = ['8', '7', '6', '5', '4', '3', '2', '1']
    let board = []

    // Builds the board it self:
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            board.push(<div className="tile" key={j + i}></div>)
        } 
    }

    // Places balack and whithe Pieces
    board = board.map ( (item, i) => {
        if (i === 0) {
            item = <Piece key={i} pieceUrl={pieceUrl.r} />
            board[i + 1] = <Piece key={i + 1} pieceUrl={pieceUrl.n} />
            board[i + 2] = <Piece key={i + 2} pieceUrl={pieceUrl.b} />
            board[i + 3] = <Piece key={i + 4} pieceUrl={pieceUrl.q} />
            board[i + 4] = <Piece key={i + 3} pieceUrl={pieceUrl.k} />
            board[i + 5] = <Piece key={i + 5} pieceUrl={pieceUrl.b} />
            board[i + 6] = <Piece key={i + 6} pieceUrl={pieceUrl.n} />
            board[i + 7] = <Piece key={i + 7} pieceUrl={pieceUrl.r} />
        } else if (i > 7 && i < 16) {
            item = <Piece key={i} pieceUrl={pieceUrl.p} />
        } else if(i > 47 && i < 56) {
            item = <Piece key={i} pieceUrl={pieceUrl.P} />
        } else if (i === 56) {
            item = <Piece key={i} pieceUrl={pieceUrl.R} />
            board[i + 1] = <Piece key={i + 1} pieceUrl={pieceUrl.N} />
            board[i + 2] = <Piece key={i + 2} pieceUrl={pieceUrl.B} />
            board[i + 3] = <Piece key={i + 4} pieceUrl={pieceUrl.Q} />
            board[i + 4] = <Piece key={i + 3} pieceUrl={pieceUrl.K} />
            board[i + 5] = <Piece key={i + 5} pieceUrl={pieceUrl.B} />
            board[i + 6] = <Piece key={i + 6} pieceUrl={pieceUrl.N} />
            board[i + 7] = <Piece key={i + 7} pieceUrl={pieceUrl.R} />
        }
        return item
    })


    function grabPiece(e) {
        const elem = e.target
        if(elem.classList.contains('piece')) {
           const x = elem.clientX * .5
           const y = elem.clientY * .5

           elem.style.width = '50px'
           elem.style.position = 'absolute'
           elem.style.top = `${x}px`
           elem.style.left = `${y}px`
        }
    }



    return ( 
        <div className="chess-board" onMouseDown={(e) => grabPiece(e)}>
            {board}
        </div>
     )
}

export default Chess
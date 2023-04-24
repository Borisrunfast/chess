import React, { useRef, useState } from "react"
import { buildBoard, updateBoard } from './board'
import './Pieces.css'
import Piece from "./Piece"


function Chess() {
    const [state, setState] = useState(buildBoard())
    const ref = useRef()
    // Chess Board Declarations:
    const board = state

    // Builds the board it self
    for (let x = 0; x < 8; x++) {
        for(let y = 0; y < 8; y++) {
            const pimpel = findPiece(board[x][y])
            board[x][y] ?
            board[x][y] = 
                <Piece 
                    key={`${x}${y}`} 
                    piece={pimpel} 
                    position={{x, y}}/> :
            null
        }
    }

    function findPiece(goardTile) {
        let foundPiece = ''
        try {foundPiece = goardTile.props.piece}
        catch {foundPiece = goardTile}
        return foundPiece
    }

    function DragOver(e) {
        e.preventDefault()
    }


    function DragDrop(e) {
        const newBoard = updateBoard(state)
        const {x, y} = clacBoardCordinates(e)

        const [piece, px, py] = e.dataTransfer.getData('text').split(',')
        
        newBoard[Number(px)][Number(py)] = ''
        newBoard[x][y] = piece

        setState(newBoard)
    }


    function clacBoardCordinates(e) {
        const {width, left, top} = ref.current.getBoundingClientRect()
        const tile = width / 8
        const x = Math.floor((e.clientY - top) / tile)
        const y = Math.floor((e.clientX - left) / tile)
        return {x, y}
    }

    return ( 
        <div ref={ref} onDragOver={DragOver} onDrop={DragDrop} className="chess-board" >
            {board}
        </div>
     )
}

export default Chess
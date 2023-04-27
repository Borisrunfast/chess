import React, { useRef, useState } from "react"
import { buildBoard, updateBoard } from './board'
import { useAppContext }  from '../Contexts/Context'
import { makeNewMove } from "../Reducer/action/move"
import Piece from "./Piece"
import './Pieces.css'

function Chess() {
    const {chessState, dispach} = useAppContext()

    const currentBoard = chessState.position[chessState.position.length - 1]

    const ref = useRef()


    // Builds the board it self
    for (let x = 0; x < 8; x++) {
        for(let y = 0; y < 8; y++) {
            const pimpel = findPiece(currentBoard[x][y])
            currentBoard[x][y] ?
            currentBoard[x][y] = 
                <Piece 
                    key={`${x}${y}`} 
                    piece={pimpel} 
                    tile={{x, y}}/> :
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
        const newBoard = updateBoard(currentBoard)
        const {x, y} = clacBoardCordinates(e)

        const [piece, px, py] = e.dataTransfer.getData('text').split(',')

        if (chessState.playerMoves?.find(t => t[0] === x && t[1] === y)) {
            newBoard[Number(px)][Number(py)] = ''
            newBoard[x][y] = piece
            dispach(makeNewMove(newBoard)) 
        }    
        
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
            {currentBoard}
        </div>
     )
}

export default Chess
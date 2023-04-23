import React, { useRef, useState } from "react"
import buildBoard from './buildBoard'
import './Pieces.css'
import Piece from "./Piece"


function Chess() {
    const [state, setState] = useState(buildBoard())
    const ref = useRef()
    // Chess Board Declarations:
    let board = state

    // Builds the board it self:
    for (let x = 0; x < 8; x++) {
        for(let y = 0; y < 8; y++) {
            board[x][y] ?
            board[x][y] = <Piece key={`${x}${y}`} piece={board[x][y]} position={`${x}${y}`}/> :
            null
        }
    }


    function DragOver(e) {
        e.preventDefault()
    }



    function DragDrop(e) {
        const {x, y} = clacBoardCordinates(e)

        
        const [piece, position] = e.dataTransfer.getData('text').split(',')

    }


    function clacBoardCordinates(e) {
        const {width, left, top} = ref.current.getBoundingClientRect()
        const tile = width / 8
        const y = Math.floor((e.clientY - top) / tile)
        const x = Math.floor((e.clientX - left) / tile)
        return {x, y}
    }

    return ( 
        <div ref={ref} onDragOver={DragOver} onDrop={DragDrop} className="chess-board" >
            {board}
        </div>
     )
}

export default Chess
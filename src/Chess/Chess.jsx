import React from "react"
import p from './piecesData'
import './Pieces.css'



function Chess() {
    const grid = new Array(64)
    console.log(p.p)

    for (let i = 8; i < 16; i++) {
        grid.push(<div key={i} style={{backgroundImage: `url(${p.p})`}}></div>)
    }


    return ( 
        <div className="chess-board">
            {grid}
        </div>
     )
}

export default Chess
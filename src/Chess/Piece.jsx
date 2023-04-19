function Piece({pieceUrl}) {



    return ( 
        <div className="tile"><div className="piece" style={{backgroundImage: `url(${pieceUrl})`}}/></div>
     )
}

export default Piece
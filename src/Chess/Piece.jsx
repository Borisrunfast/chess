
function Piece({piece, position}) {

    function DragStart(e) {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', `${piece}, ${position}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        }, 0)
    }
    
    return ( <div draggable onDragStart={DragStart} className={`piece ${piece} p-${position}`}></div> )
}

export default Piece

function Piece({piece, position}) {

    function DragStart(e) {

        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', `${piece}, ${position.x}, ${position.y}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        }, 0)
    }

    function dragEnd(e) {
        e.target.style.display = 'block'
    }

    return <div draggable onDragEnd={(e) => dragEnd(e)} onDragStart={DragStart} className={`piece ${piece} p-${position.x}${position.y}`}></div>
}

export default Piece
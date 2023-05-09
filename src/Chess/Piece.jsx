import { useAppContext } from '../Contexts/Context'
import { generatePlayerMoves } from '../Reducer/action/move'
import { arbiter } from '../arbiter/arbiter'


function Piece({piece, tile}) {

    const {chessState, dispach} = useAppContext()
    const {turn, position} = chessState
    const currentPosition = position[position.length - 1]

    function DragStart(e) {

        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', `${piece}, ${tile.x}, ${tile.y}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        }, 0)
        if (turn === piece[0]) {
            const playerMoves = arbiter.getRegularMoves({position:currentPosition, piece, tile})
            
            dispach(generatePlayerMoves({playerMoves}))
            
        }
    }

    function dragEnd(e) {
        e.target.style.display = 'block'
    }

    return <div draggable onDragEnd={(e) => dragEnd(e)} onDragStart={DragStart} className={`piece ${piece} p-${tile.x}${tile.y}`}></div>
}

export default Piece
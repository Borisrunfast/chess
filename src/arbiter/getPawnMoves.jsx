export function getPawnMoves({position, piece, tile}) {
    const moves = []
    const us = piece[0]
    const enemy = us === 'w' ? 'b' : 'w'

    const direction = [
        piece[0] === 'w'? [-1, 0] : [1, 0]
    ]

    direction.forEach(dir => {
        
        const x = tile.x + dir[0]
        const y = tile.y + dir[1]
            
        if (position[x] === undefined || position[x][y] === undefined) {
            return
        }
        if (position[x][y].props?.piece[0] === enemy){
            moves.push([x, y])
            return
        }
        if (position[x][y].props?.piece[0] === us) {
            return
        }
        moves.push([x, y])
        
    })

    return moves
}
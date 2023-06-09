export function getKnightMoves({position, piece, tile}) {
    const moves = []
    const us = piece[0]
    const enemy = us === 'w' ? 'b' : 'w'

    const direction = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1]
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
export function getQueenMoves({position, piece, tile}) {
    const moves = []
    const us = piece[0]
    const enemy = us === 'w' ? 'b' : 'w'

    const direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 1],
        [-1, 1],
        [-1, -1],
    ]

    direction.forEach(dir => {
        for (let i = 1; i < 8; i++) {
            const x = tile.x + (i*dir[0])
            const y = tile.y + (i*dir[1])
            
            if (position[x] === undefined || position[x][y] === undefined) {
                break
            }
            if (position[x][y].props?.piece[0] === enemy){
                moves.push([x, y])
                break
            }
            if (position[x][y].props?.piece[0] === us) {
                break
            }
            moves.push([x, y])
        }
    })



    return moves
}
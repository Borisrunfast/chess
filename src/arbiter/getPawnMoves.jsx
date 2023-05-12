export function getPawnMoves({position, piece, tile}) {
    const moves = []
    const us = piece[0]
    const enemy = us === 'w' ? 'b' : 'w'



    const direction = [
        piece[0] === 'w'? [-1, 0] : [1, 0],

    ]

    const attackingDirection = [
        piece[0] === 'w'? [-1, -1] : [1, 1],
        piece[0] === 'w'? [-1, 1] : [1, -1]
    ]
    

    direction.forEach(dir => {

        for (let i = 1; i < 2; i++) {

            const x = tile.x + (i * dir[0])
            const y = tile.y + (i * dir[1])

            const attackXL = tile.x + attackingDirection[0][0]
            const attackXR = tile.x + attackingDirection[1][0]
            
            const attackYL = tile.y + attackingDirection[0][1]
            const attckYR = tile.y + attackingDirection[1][1]


            console.log(position[attackXL][attackYL]?.props?.piece)  
  
            console.log(position[attackXR][attckYR]?.props?.piece)  

            if (position[x] === undefined || position[x][y] === undefined) {
                break
            }
            if(position[attackXL][attackYL]?.props?.piece[0] === enemy || position[attackXR][attckYR]?.props?.piece[0] === enemy) {
                if(position[attackXL][attackYL]?.props?.piece[0] === enemy) {
                    moves.push([attackXL, attackYL])
                }
                if (position[attackXR][attckYR]?.props?.piece[0] === enemy) {
                    moves.push([attackXR, attckYR])
                }
                break
            }
            if (position[x][y]?.props?.piece[0] === enemy){
                break
            }
            if (position[x][y]?.props?.piece[0] === us) {
                break
            }
            moves.push([x, y])
        }
        
    })
    return moves
}
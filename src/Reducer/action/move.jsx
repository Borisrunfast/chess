export function makeNewMove(newBoard) {
    return {
        type: 'NEW_MOVE',
        payload: {newBoard}
    }
}

export function generatePlayerMoves({playerMoves}) {
    return {
        type: 'GENERATE_PLAYER_MOVES',
        payload: {playerMoves}
    }
}
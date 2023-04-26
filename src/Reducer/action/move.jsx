export function makeNewMove(newBoard) {
    return {
        type: 'NEW_MOVE',
        payload: {newBoard}
    }
}
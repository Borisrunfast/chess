function reducer(state, action) {
    switch (action.type) {
        case 'NEW_MOVE': {
            let {turn, position} = state

            turn = turn === 'w' ? 'b' : 'w'

            position = [
                ...position,
                action.payload.newBoard
            ]

            return {
                ...state,
                turn,
                position
            }
        }
        case 'GENERATE_PLAYER_MOVES': {
            
            return {
                ...state,
                playerMoves: action.payload.playerMoves
            }
        }
            
            default: state
    }
}

export {reducer}
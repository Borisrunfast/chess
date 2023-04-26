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
            
            default: state
    }
}

export {reducer}
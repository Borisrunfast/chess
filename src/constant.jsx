import {buildBoard} from './Chess/board'

export const chessBoardState = {
    position: [buildBoard()],
    turn: 'w',
    playerMoves: []
}
import { getRookMoves } from "./getRookMoves"

export const arbiter = {
    getRegularMoves: function({position, piece, tile}) {
        switch (piece[1]) {
            case 'r': return getRookMoves({position, piece, tile})
            //case 'n': 

            default: null
        }
        
    }
}
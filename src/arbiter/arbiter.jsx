import { getBishopMoves } from "./getBishopMoves"
import { getKnightMoves } from "./getKightMoves"
import { getKingMoves } from "./getKingMoves"
import { getPawnMoves } from "./getPawnMoves"
import { getQueenMoves } from "./getQueenMoves"
import { getRookMoves } from "./getRookMoves"

export const arbiter = {
    getRegularMoves: function({position, piece, tile}) {
        switch (piece[1]) {
            case 'p': return getPawnMoves({position, piece, tile})
            case 'r': return getRookMoves({position, piece, tile})
            case 'n': return getKnightMoves({position, piece, tile})
            case 'b': return getBishopMoves({position, piece, tile})
            case 'q': return getQueenMoves({position, piece, tile})
            case 'k': return getKingMoves({position, piece, tile})

            default: null
        }
        
    }
}
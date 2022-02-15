import {ADD_CARD} from "../../redux/reducer/types"
import {SORT_CARD} from "../../redux/reducer/types"
import {DELETE_CARD} from "../../redux/reducer/types"

const initialState = {
    cards: []
}

export const blockReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state, {
                    id: action.id
                }
            ]
        case SORT_CARD:
            return [...state.sort((a, b) => a.id - b.id)]
        case DELETE_CARD:
            return [...state.filter((c) => c.id !== action.id)]
        default: return state
    }
};
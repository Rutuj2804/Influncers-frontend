import {
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from "./type"
  
const initialState = {
    listings: [],
    users: [],
    error: "",
}

const find = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case SEARCH_SUCCESS:
            return {
                ...state,
                listings: payload.listings,
                users: payload.users,
            }
        case SEARCH_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }

}

export default find

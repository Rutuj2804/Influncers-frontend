import {
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_FAIL,
    FETCH_DETAIL_LISTING_VIEW_SUCCESS,
    FETCH_DETAIL_LISTING_VIEW_FAIL
} from "./types"
  
const initialState = {
    listings: [],
    single_listing: {},
    error: ""
}

const home = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case FETCH_LISTINGS_SUCCESS:
            return {
                ...state,
                listings: payload
            }
        case FETCH_DETAIL_LISTING_VIEW_SUCCESS:
            return {
                ...state,
                single_listing: payload
            }
        case FETCH_DETAIL_LISTING_VIEW_FAIL: 
            return {
                ...state,
                error: payload
            }
        case FETCH_LISTINGS_FAIL:
        default:
            return state
    }

}

export default home

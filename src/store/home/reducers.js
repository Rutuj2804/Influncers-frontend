import { UPDATE_APPLICATION_FAIL, UPDATE_APPLICATION_SUCCESS } from "../detail-views/type"
import {
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_FAIL,
    FETCH_DETAIL_LISTING_VIEW_SUCCESS,
    FETCH_DETAIL_LISTING_VIEW_FAIL,
    REMOVE_MESSAGES
} from "./types"
  
const initialState = {
    listings: [],
    single_listing: {
        applications: []
    },
    success: "",
    error: "",
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
        case UPDATE_APPLICATION_SUCCESS:
            return {
                ...state,
                success: "Successfully updated application",
                single_listing: payload
            }
        case UPDATE_APPLICATION_FAIL:
            return {
                ...state,
                error: payload
            }
        case REMOVE_MESSAGES:
            return {
                ...state,
                error: '',
                success: ''
            }
        case FETCH_LISTINGS_FAIL:
        default:
            return state
    }

}

export default home

import {
    APPLY_FOR_LISTING_SUCCESS,
    APPLY_FOR_LISTING_FAIL,
    HIRED_FOR_LISTING_SUCCESS,
    HIRED_FOR_LISTING_FAIL,
    REMOVE_MESSAGES,
    DETAIL_VIEW_LISTINGS_SUCCESS,
    DETAIL_VIEW_LISTINGS_FAIL,
    DELETE_LISTINGS_SUCCESS,
    DELETE_LISTINGS_FAIL,
    FETCH_RATINGS_SUCCESS,
    FETCH_RATINGS_FAIL,
    RATE_USER_SUCCESS,
    RATE_USER_FAIL
} from "./type"
  
const initialState = {
    dates: [],
    applications: [],
    badges: [],
    application_badges: [],
    rates: [],
    rate_hired: [],
    rating_labels: [],
    single_listing: {},
    error: "",
    success: ""
}

const detialview = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case APPLY_FOR_LISTING_SUCCESS:
            return {
                ...state,
                success: "Successfully applied for listing"
            }
        case HIRED_FOR_LISTING_SUCCESS:
            return {
                ...state,
                success: "Successfully completed hiring"
            }
        case APPLY_FOR_LISTING_FAIL:
            return {
                ...state,
                error: payload
            }
        case DELETE_LISTINGS_SUCCESS:
            return {
                ...state,
                success: 'Successfully deleted listing'
            }
        case DELETE_LISTINGS_FAIL:
            return {
                ...state,
                error: payload
            }
        case DETAIL_VIEW_LISTINGS_SUCCESS:
            return {
                ...state,
                dates: payload.dates,
                applications: payload.applications,
                badges: payload.badge_labels,
                application_badges: payload.application_badges,
                rates: payload.rates,
                rating_labels: payload.rating_labels
            }
        case HIRED_FOR_LISTING_FAIL:
            return {
                ...state,
                error: payload
            }
        case FETCH_RATINGS_SUCCESS:
            return {
                ...state,
                rate_hired: payload
            }
        case RATE_USER_SUCCESS:
            return{
                ...state,
                success: payload
            }
        case RATE_USER_FAIL:
            return{
                ...state,
                error: payload
            }
        case REMOVE_MESSAGES:
            return {
                ...state,
                error: '',
                success: '',
            }
        case FETCH_RATINGS_FAIL:
        case DETAIL_VIEW_LISTINGS_FAIL:
        default:
            return state
    }

}

export default detialview

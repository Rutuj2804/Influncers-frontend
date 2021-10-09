import {
    FETCH_MY_LISTINGS_SUCCESS,
    FETCH_MY_LISTINGS_FAIL,
    FETCH_MY_LISTING_DETAIL_VIEW_SUCCESS,
    FETCH_MY_LISTING_DETAIL_VIEW_FAIL,
    FETCH_MY_RECENT_LISTINGS_SUCCESS,
    FETCH_MY_RECENT_LISTINGS_FAIL,
    CREATE_LISTINGS_SUCCESS,
    CREATE_LISTINGS_FAIL,

    FETCH_DASHBOARD_ANALTYICS_SUCCESS,
    FETCH_DASHBOARD_ANALTYICS_FAIL
} from './types'

const initialState = {
    my_listings: [],
    my_listing_for_display: [],
    recent_listings: [],
    listing_detail: {},
    dates: [],
    projects: [],
    success: '',
    error: '',
}

const Dashboard = (state= initialState, actions ) => {

    const { type, payload } = actions

    switch (type) {
        case FETCH_MY_LISTINGS_SUCCESS:
            console.log(payload)
            return {
                ...state,
                my_listings: payload,
                my_listing_for_display: payload
            }
        case FETCH_MY_LISTING_DETAIL_VIEW_SUCCESS:
            return {
                ...state,
                listing_detail: payload
            }
        case FETCH_DASHBOARD_ANALTYICS_SUCCESS:
            return {
                ...state,
                dates: payload.dates,
                projects: payload.projects,
            }
        case CREATE_LISTINGS_SUCCESS:
            return {
                ...state,
                success: payload
            }
        case CREATE_LISTINGS_FAIL:
            return {
                ...state,
                error: payload
            }
        case FETCH_MY_RECENT_LISTINGS_SUCCESS:
            return {
                ...state,
                recent_listings: payload
            }
        case FETCH_MY_RECENT_LISTINGS_FAIL:
        case FETCH_DASHBOARD_ANALTYICS_FAIL:
        case FETCH_MY_LISTING_DETAIL_VIEW_FAIL:
        case FETCH_MY_LISTINGS_FAIL:
        default:
            return state;
    }

}

export default Dashboard
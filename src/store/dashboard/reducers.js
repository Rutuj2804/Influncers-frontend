import {
    FETCH_MY_LISTINGS_SUCCESS,
    FETCH_MY_LISTINGS_FAIL,
    FETCH_MY_LISTING_DETAIL_VIEW_SUCCESS,
    FETCH_MY_LISTING_DETAIL_VIEW_FAIL,

    FETCH_DASHBOARD_ANALTYICS_SUCCESS,
    FETCH_DASHBOARD_ANALTYICS_FAIL
} from './types'

const initialState = {
    my_listings: [],
    listing_detail: {},
    dates: [],
    projects: []
}

const Dashboard = (state= initialState, actions ) => {

    const { type, payload } = actions

    switch (type) {
        case FETCH_MY_LISTINGS_SUCCESS:
            return {
                ...state,
                my_listings: payload
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
        case FETCH_DASHBOARD_ANALTYICS_FAIL:
        case FETCH_MY_LISTING_DETAIL_VIEW_FAIL:
        case FETCH_MY_LISTINGS_FAIL:
        default:
            return state;
    }

}

export default Dashboard
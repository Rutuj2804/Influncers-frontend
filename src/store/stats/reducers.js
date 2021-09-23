import {
    FETCH_MY_APPLICATIONS_SUCCESS,
    FETCH_MY_APPLICATIONS_FAIL,
    FETCH_ANALYTICS_DATA_SUCCESS,
    FETCH_ANALYTICS_DATA_FAIL,
    FETCH_TIME_SPEND_ON_WEBSITE_SUCCESS
} from "./types"
  
const initialState = {
    applications: [],
    dates_analytics: [],
    applications_analytics: [],
    time_spend_labels: [],
    time_spend_data: [],
    success: '',
    error: ''
}

const stats = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case FETCH_MY_APPLICATIONS_SUCCESS:
            return {
                ...state,
                applications: payload
            }
        case FETCH_ANALYTICS_DATA_SUCCESS:
            return {
                ...state,
                dates_analytics: payload.dates,
                applications_analytics: payload.applications
            }
        case FETCH_TIME_SPEND_ON_WEBSITE_SUCCESS:
            return {
                ...state,
                time_spend_labels: payload.dates,
                time_spend_data: payload.time
            }
        case FETCH_ANALYTICS_DATA_FAIL:
        case FETCH_MY_APPLICATIONS_FAIL:
        default:
            return state
    }

}

export default stats

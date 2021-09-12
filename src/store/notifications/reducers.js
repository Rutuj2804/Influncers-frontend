import {
    FETCH_UNSEEN_NOTIFICATIONS_FAIL,
    FETCH_UNSEEN_NOTIFICATIONS_SUCCESS,
    FETCH_NOTIFICATIONS_SUCCESS,
    FETCH_NOTIFICATIONS_FAIL
} from './types'

const initialState = {
    notifications_unseen: [],
    notifications: [],
    error: ''
}
 
const Notifications = (state=initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: payload,
            }
        case FETCH_UNSEEN_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications_unseen: payload,
            }
        case FETCH_UNSEEN_NOTIFICATIONS_FAIL:
        case FETCH_NOTIFICATIONS_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default Notifications
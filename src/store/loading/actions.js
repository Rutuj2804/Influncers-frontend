import {
    LOADING_STARTS,
    LOADING_STOPS
} from './types'

export const loading_starts = () => async dispatch => {
    dispatch({
        type: LOADING_STARTS
    })
}

export const loading_stops = () => async dispatch => {
    dispatch({
        type: LOADING_STOPS
    })
}
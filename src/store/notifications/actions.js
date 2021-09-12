import {
    FETCH_NOTIFICATIONS_FAIL,
    FETCH_NOTIFICATIONS_SUCCESS,
    FETCH_UNSEEN_NOTIFICATIONS_SUCCESS,
    FETCH_UNSEEN_NOTIFICATIONS_FAIL
} from './types'
import axios from 'axios'
import { loading_starts, loading_stops } from '../actions'

export const fetch_notifications = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/notifications/get/`, config)

        dispatch({
            type: FETCH_NOTIFICATIONS_SUCCESS,
            payload: res.data.notifications
        })

    } catch (error) {
        dispatch({
            type: FETCH_NOTIFICATIONS_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())

}

export const fetch_unseen_notifications = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/notifications/get-unseen/`, config)

        dispatch({
            type: FETCH_UNSEEN_NOTIFICATIONS_SUCCESS,
            payload: res.data.notifications
        })

    } catch (error) {
        dispatch({
            type: FETCH_UNSEEN_NOTIFICATIONS_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())

}
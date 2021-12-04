import {
    FETCH_DISPLAY_USER_SUCCESS,
    FETCH_DISPLAY_USER_FAIL
} from './types'
import axios from "axios";
import { loading_starts, loading_stops } from '../actions'

export const fetch_requested_user = (username, history) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ username })

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/get-user/`, body, config)

        dispatch({
            type: FETCH_DISPLAY_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {

        dispatch(loading_stops())

        dispatch({
            type: FETCH_DISPLAY_USER_FAIL
        })

        if(error.response.status === 404) {
            history.push('/pages-404')
        }

    }

    dispatch(loading_stops())

}
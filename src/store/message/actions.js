import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAIL
} from "./types"
import axios from "axios"

export const send_message = (message, id) => async dispatch =>{

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ message, id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/message/send/`, body, config)

        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: SEND_MESSAGE_FAIL
        })
    }
    
}

export const fetch_messages = (id) => async dispatch =>{

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/message/fetch/`, body, config)

        dispatch({
            type: FETCH_MESSAGE_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_MESSAGE_FAIL,
            payload: error.response.data
        })
    }
    
}
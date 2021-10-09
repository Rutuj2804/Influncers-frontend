import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAIL,
    FETCH_CHAT_ROOMS_SUCCESS,
    FETCH_CHAT_ROOMS_FAIL,
    CREATE_CHAT_ROOM_SUCCESS,
    CREATE_CHAT_ROOM_FAIL,
    CLEAR_CHAT_ROOM_ID,
} from "./types"
import axios from "axios"
import { loading_starts, loading_stops } from '../loading/actions'

export const fetch_rooms = () => async dispatch =>{

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/chats/get/`, config)

        dispatch({
            type: FETCH_CHAT_ROOMS_SUCCESS,
            payload: res.data.room
        })

    } catch (error) {
        dispatch({
            type: FETCH_CHAT_ROOMS_FAIL
        })
    }
    
}

export const send_message = (message, room_id) => async dispatch =>{

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ message, room_id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/chats/add/`, body, config)

        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: res.data.message
        })

    } catch (error) {
        dispatch({
            type: SEND_MESSAGE_FAIL
        })
    }
    
}

export const clear_chat_room_id = () => async dispatch => {
    dispatch({
        type: CLEAR_CHAT_ROOM_ID
    })
}

export const create_chat_room = (username) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ username })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/chats/create/`, body, config)

        dispatch({
            type: CREATE_CHAT_ROOM_SUCCESS,
            payload: res.data.room
        })

    } catch (error) {
        dispatch({
            type: CREATE_CHAT_ROOM_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())
    
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
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/chats/get-messages/`, body, config)

        dispatch({
            type: FETCH_MESSAGE_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_MESSAGE_FAIL,
            payload: error.response.data.error
        })
    }
    
}

export const set_seen_messages = (id) => async dispatch =>{

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        await axios.put(`${process.env.REACT_APP_API_URL}/chats/seen/`, body, config)

    } catch (error) {
        
    }
    
}

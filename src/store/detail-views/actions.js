import {
    APPLY_FOR_LISTING_SUCCESS,
    APPLY_FOR_LISTING_FAIL,
    HIRED_FOR_LISTING_SUCCESS,
    HIRED_FOR_LISTING_FAIL,
    REMOVE_MESSAGES,
    UPDATE_APPLICATION_SUCCESS,
    UPDATE_APPLICATION_FAIL,
    DETAIL_VIEW_LISTINGS_SUCCESS,
    DETAIL_VIEW_LISTINGS_FAIL,
    DELETE_LISTINGS_SUCCESS,
    DELETE_LISTINGS_FAIL,
    FETCH_RATINGS_SUCCESS,
    FETCH_RATINGS_FAIL,
    RATE_USER_SUCCESS,
    RATE_USER_FAIL
} from "./type"
import axios from "axios"
import { loading_starts, loading_stops } from '../loading/actions'

export const apply_for_listing = (id) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/apply/`, body,config)

        dispatch({
            type: APPLY_FOR_LISTING_SUCCESS,
            payload: res.data.success
        })

    } catch (error) {
        dispatch({
            type: APPLY_FOR_LISTING_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())
    
}

export const hiring_completed = (id) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/hired/`, body,config)

        dispatch({
            type: HIRED_FOR_LISTING_SUCCESS,
            payload: res.data.success
        })

    } catch (error) {
        dispatch({
            type: HIRED_FOR_LISTING_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())
    
}

export const delete_listings = (id) => async dispatch =>{

    dispatch(loading_starts())
    
    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }
    
    const body = JSON.stringify({ id })
    
    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/delete/`, body,config)

        dispatch({
            type: DELETE_LISTINGS_SUCCESS,
            payload: res.data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_LISTINGS_FAIL,
            payload: error.response?.data?.error
        })
    }

    dispatch(loading_stops())
    
}

export const listing_detail_view_analytics = (id) => async dispatch => {

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/analytics-detail/`, body, config)

        dispatch({
            type: DETAIL_VIEW_LISTINGS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: DETAIL_VIEW_LISTINGS_FAIL
        })
    }

    dispatch(loading_stops())

}

export const update_application = (id, application_id, update, socket) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id, application_id, update })

    try {
    
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/applications/update/`, body, config)

        dispatch({
            type: UPDATE_APPLICATION_SUCCESS,
            payload: res.data.project
        })
        if(update==='hired'){
            const data = {
                'room': res.data.project.room,
                'by_user': res.data.project.user,
                'text_one': res.data.project.user.username,
                'highlighted_text': ' has accepted',
                'text_two': ' your application',
                'created_at': new Date()
            }
            socket.emit('send-notifications', data)
        }

    } catch (error) {
        dispatch({
            type: UPDATE_APPLICATION_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())
    
}

export const get_rating_views = (id) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/get-ratings/`, body,config)

        dispatch({
            type: FETCH_RATINGS_SUCCESS,
            payload: res.data.ratings
        })

    } catch (error) {
        dispatch({
            type: FETCH_RATINGS_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())
    
}

export const rate_hired = (id, rate) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id, rate })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/rate-user/`, body,config)

        dispatch({
            type: RATE_USER_SUCCESS,
            payload: res.data.success
        })

    } catch (error) {
        dispatch({
            type: RATE_USER_FAIL,
            payload: error.response.data.error
        })
    }

    dispatch(loading_stops())
    
}

export const remove_messages = () => async dispatch =>{

    dispatch({
        type: REMOVE_MESSAGES
    })
    
}
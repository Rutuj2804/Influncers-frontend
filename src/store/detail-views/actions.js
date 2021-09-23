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
    DELETE_LISTINGS_FAIL
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

export const update_application = (id, application_id, update) => async dispatch =>{

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

    } catch (error) {
        dispatch({
            type: UPDATE_APPLICATION_FAIL,
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
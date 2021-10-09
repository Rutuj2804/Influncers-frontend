import {
    FETCH_MY_APPLICATIONS_SUCCESS,
    FETCH_MY_APPLICATIONS_FAIL,
    FETCH_ANALYTICS_DATA_SUCCESS,
    FETCH_ANALYTICS_DATA_FAIL,
    FETCH_TIME_SPEND_ON_WEBSITE_SUCCESS,
    FETCH_TIME_SPEND_ON_WEBSITE_FAIL,
    FETCH_TOP_PERFORMERS_SUCCESS,
    FETCH_TOP_PERFORMERS_FAIL
} from "./types"
import axios from "axios"
import { loading_starts, loading_stops } from '../loading/actions'

export const fetch_applications = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/applications/get/`, config)

        dispatch({
            type: FETCH_MY_APPLICATIONS_SUCCESS,
            payload: res.data.applications
        })

    } catch (error) {
        dispatch({
            type: FETCH_MY_APPLICATIONS_FAIL
        })
    }

    dispatch(loading_stops())
    
}


export const stats_analytics = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/listings/user-analytics/`, config)

        dispatch({
            type: FETCH_ANALYTICS_DATA_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_ANALYTICS_DATA_FAIL
        })
    }

    dispatch(loading_stops())
    
}


export const time_spend_analytics = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/useractivity/analytics/`, config)

        dispatch({
            type: FETCH_TIME_SPEND_ON_WEBSITE_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_TIME_SPEND_ON_WEBSITE_FAIL
        })
    }

    dispatch(loading_stops())
    
}

export const top_performers = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/top/`, config)

        dispatch({
            type: FETCH_TOP_PERFORMERS_SUCCESS,
            payload: res.data.rankers
        })

    } catch (error) {
        dispatch({
            type: FETCH_TOP_PERFORMERS_FAIL
        })
    }

    dispatch(loading_stops())
    
}

export const send_time_spend = (time) => async dispatch =>{

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const minutes = Math.round(((time % 86400000) % 3600000) / 60000)

    const body = {
        "time": minutes
    }
    
    await axios.post(`${process.env.REACT_APP_API_URL}/useractivity/record/`, body, config)

}

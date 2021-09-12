import {
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_FAIL,
    FETCH_DETAIL_LISTING_VIEW_SUCCESS,
    FETCH_DETAIL_LISTING_VIEW_FAIL
} from "./types"
import axios from "axios"
import { loading_starts, loading_stops } from '../loading/actions'

export const fetch_listings = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/listings/get/`, config)

        dispatch({
            type: FETCH_LISTINGS_SUCCESS,
            payload: res.data.listings
        })

    } catch (error) {
        dispatch({
            type: FETCH_LISTINGS_FAIL
        })
    }

    dispatch(loading_stops())
    
}

export const fetch_detail_view_of_listing = (id) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ id })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/get-detail/`, body, config)

        dispatch({
            type: FETCH_DETAIL_LISTING_VIEW_SUCCESS,
            payload: res.data.listing
        })

    } catch (error) {
        dispatch({
            type: FETCH_DETAIL_LISTING_VIEW_FAIL,
            payload: error.response.data
        })
    }

    dispatch(loading_stops())
    
}
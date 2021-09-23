import {
    FETCH_MY_LISTINGS_SUCCESS,
    FETCH_MY_LISTINGS_FAIL,
    FETCH_MY_LISTING_DETAIL_VIEW_SUCCESS,
    FETCH_MY_LISTING_DETAIL_VIEW_FAIL,

    FETCH_DASHBOARD_ANALTYICS_SUCCESS,
    FETCH_DASHBOARD_ANALTYICS_FAIL
} from './types'
import axios from 'axios'
import { loading_starts, loading_stops } from '../loading/actions'

export const fetch_my_listings = () => async dispatch => {

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/listings/get-my/`, config)

        dispatch({
            type: FETCH_MY_LISTINGS_SUCCESS,
            payload: res.data.listings
        })

    } catch (error) {
        dispatch({
            type: FETCH_MY_LISTINGS_FAIL
        })
    }

    dispatch(loading_stops())

}

export const dashboard_analytics = () => async dispatch => {

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/listings/analytics/`, config)

        dispatch({
            type: FETCH_DASHBOARD_ANALTYICS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_DASHBOARD_ANALTYICS_FAIL
        })
    }

    dispatch(loading_stops())

}

export const fetch_my_listing_detail_view = (id) => async dispatch => {

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    const body = { "id": id }

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/listings/get-detail/`, body, config)

        dispatch({
            type: FETCH_MY_LISTING_DETAIL_VIEW_SUCCESS, //needs analytics
            payload: res.data.listing
        })

    } catch (error) {
        dispatch({
            type: FETCH_MY_LISTING_DETAIL_VIEW_FAIL
        })
    }

    dispatch(loading_stops())

}
import {
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from "./type"
import axios from "axios"
import { loading_starts, loading_stops } from '../loading/actions'

export const search_database = (type, text) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ type, text })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/searches/query/`, body, config)

        dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: SEARCH_FAIL
        })
    }

    dispatch(loading_stops())
    
}

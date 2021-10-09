import axios from "axios";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  CHECK_AUTHENTICATION_SUCCESS,
  CHECK_AUTHENTICATION_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,

  REMOVE_AUTH_MESSAGES,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from "./types"
import { loading_starts, loading_stops, send_status_update } from '../actions'

export const login_user = ({ username, password }) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json"
        }
    }

    const body = JSON.stringify({ username, password })

    try {
    
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/rest_auth_links/`, body, config)

        localStorage.setItem("token", res.data.token)

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })

        dispatch(load_user())

    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response.data.non_field_errors[0]
        })

        setTimeout(()=>{
            dispatch({
                type: REMOVE_AUTH_MESSAGES
            })
        }, 5000)
    }

    dispatch(loading_stops())

}

export const register_user = (formdata) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json"
        }
    }

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register/`, formdata, config)

        localStorage.setItem('token', res.data.token)

        dispatch({
            type: REGISTER_USER_SUCCESS,
        })

        dispatch(check_authentication())

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.error
        })

        setTimeout(()=>{
            dispatch({
                type: REMOVE_AUTH_MESSAGES
            })
        },5000)
    }

    dispatch(loading_stops())

}

export const update_user = (formdata) => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }

    try {
        
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/accounts/edit/`, formdata, config)

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: res.data.user
        })

        setTimeout(()=>{
            dispatch({
                type: REMOVE_AUTH_MESSAGES
            })
        },5000)

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.error
        })

        setTimeout(()=>{
            dispatch({
                type: REMOVE_AUTH_MESSAGES
            })
        },5000)
    }

    dispatch(loading_stops())

}

export const load_user = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/get/`, config)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL
        })
    }

    dispatch(loading_stops())

}

export const check_authentication = () => async dispatch =>{

    dispatch(loading_starts())

    const config = {
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }

    try {
    
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/check_authentication/`, config)
        
        if(res.data.success)
            dispatch({
                type: CHECK_AUTHENTICATION_SUCCESS,
            })

        dispatch(load_user())

    } catch (error) {
        dispatch({
            type: CHECK_AUTHENTICATION_FAIL
        })
    }

    dispatch(loading_stops())

}

export const logout_user = () => async dispatch =>{

    dispatch(loading_starts())

    try {
    
        await dispatch(send_status_update('offline'))
        localStorage.removeItem("token")
        dispatch({
            type: LOGOUT_USER_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAIL
        })
    }

    dispatch(loading_stops())

}
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
  
const initialState = {
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    city: "",
    state: "",
    description: "",
    facebook: "",
    instagram: "",
    youtube: "",
    photo: "",
    isCompany: false,
    rating: 0,
    raters_count: 0,
    isAuthenticated: false,
    skills: [],
    links: [],
    error: "",
    success: ""
}

const login = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {

        case LOGIN_USER_SUCCESS:
        case CHECK_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case CHECK_AUTHENTICATION_FAIL:{
            return {
                ...state,
                isAuthenticated: false
            }
        }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                success: "Successfully registered user"
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                email: payload.email,
                first_name: payload.first_name,
                last_name: payload.last_name,
                username: payload.username,
                city: payload.city,
                state: payload.state,
                description: payload.description,
                facebook: payload.facebook,
                instagram: payload.instagram,
                youtube: payload.youtube,
                photo: payload.photo,
                isCompany: payload.isCompany,
                isAuthenticated: true,
                rating: payload.rate,
                raters_count: payload.raters_count,
                skills: payload.skills,
                links: payload.links,
                success: 'Successfully updated user'
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                email: payload.email,
                first_name: payload.first_name,
                last_name: payload.last_name,
                username: payload.username,
                city: payload.city,
                state: payload.state,
                description: payload.description,
                facebook: payload.facebook,
                instagram: payload.instagram,
                youtube: payload.youtube,
                photo: payload.photo,
                isCompany: payload.isCompany,
                isAuthenticated: true,
                rating: payload.rate,
                raters_count: payload.raters_count,
                skills: payload.skills,
                links: payload.links,
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                error: payload
            }
        case REMOVE_AUTH_MESSAGES:
            return {
                ...state,
                success: "",
                error: ""
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: payload
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case UPDATE_USER_FAIL:
            return {
                ...state,
                error: payload
            }
        case LOAD_USER_FAIL:
        case LOGOUT_USER_FAIL:
        default:
            return state
    }

}

export default login

import {
    FETCH_DISPLAY_USER_FAIL,
    FETCH_DISPLAY_USER_SUCCESS
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
    badge: 0,
    rating: 0,
    raters_count: 0,
    isAuthenticated: false,
    applications: 0,
    hires: 0,
    underprocess: 0,
    timespent: 0,
    skills: [],
    links: [],
    error: "",
    success: ""
}

const displayUser = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case FETCH_DISPLAY_USER_SUCCESS:
            return {
                ...state,
                email: payload.user.email,
                first_name: payload.user.first_name,
                last_name: payload.user.last_name,
                username: payload.user.username,
                city: payload.user.city,
                state: payload.user.state,
                description: payload.user.description,
                facebook: payload.user.facebook,
                instagram: payload.user.instagram,
                youtube: payload.user.youtube,
                photo: payload.user.photo,
                isCompany: payload.user.isCompany,
                isAuthenticated: true,
                badge: payload.user.badge,
                rating: payload.user.rate,
                raters_count: payload.user.raters_count,
                skills: payload.user.skills,
                links: payload.user.links,
                applications: payload.application.applications,
                hires: payload.application.hires,
                underprocess: payload.application.underprocess,
                timespent: payload.application.timespent,
                success: 'Successfully updated user'
            }
        case FETCH_DISPLAY_USER_FAIL:
        default:
            return state
    }

}

export default displayUser

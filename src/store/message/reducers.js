import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAIL,
    FETCH_CHAT_ROOMS_SUCCESS,
    FETCH_CHAT_ROOMS_FAIL
} from "./types"
  
const initialState = {
    messages: [],
    chat_rooms: [],
    error: ""
}

const messages = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: { ...messages, payload }
            }
        case FETCH_CHAT_ROOMS_SUCCESS:
            return{
                ...state,
                chat_rooms: payload
            }
        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: payload
            }
        case FETCH_MESSAGE_FAIL:
            return {
                ...state,
                error: payload
            }
        case SEND_MESSAGE_FAIL:
        case FETCH_CHAT_ROOMS_FAIL:
        default:
            return state
    }

}

export default messages

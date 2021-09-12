import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAIL
} from "./types"
  
const initialState = {
    messages: [],
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
        default:
            return state
    }

}

export default messages

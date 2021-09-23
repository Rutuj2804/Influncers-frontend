import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAIL,
    FETCH_CHAT_ROOMS_SUCCESS,
    FETCH_CHAT_ROOMS_FAIL,
    CREATE_CHAT_ROOM_SUCCESS,
    CLEAR_CHAT_ROOM_ID,
    CREATE_CHAT_ROOM_FAIL
} from "./types"
  
const initialState = {
    messages: [],
    opposite_user: {
        first_name: '',
        last_name: '',
        status: ''
    },
    chat_rooms: [],
    chat_room_id: null,
    success: "",
    error: "",
}

const messages = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, payload ]
            }
        case FETCH_CHAT_ROOMS_SUCCESS:
            return{
                ...state,
                chat_rooms: payload
            }
        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: payload.messages,
                opposite_user: payload.user
            }
        case FETCH_MESSAGE_FAIL:
            return {
                ...state,
                error: payload
            }
        case CREATE_CHAT_ROOM_SUCCESS:
            return{
                ...state,
                chat_room_id: payload.id,
                success: "Successfully created room"
            }
        case CLEAR_CHAT_ROOM_ID:
            return{
                ...state,
                chat_room_id: null
            }
        case CREATE_CHAT_ROOM_FAIL:
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

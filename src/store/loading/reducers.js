import {
    LOADING_STARTS,
    LOADING_STOPS
} from './types'

const initialState = {
    loading: 0
}

const Loading = (state = initialState, action) => {
    const { type } = action

    switch (type) {
        case LOADING_STARTS:
            return {
                ...state,
                loading: state.loading + 1
            }
        case LOADING_STOPS:
            return {
                ...state,
                loading: state.loading - 1
            }
        default:
            return state;
    }
}

export default Loading
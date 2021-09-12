import {
    GET_DATA
} from './types'

const initialState = {
    data: []
}

const Dashboard = (state= initialState, actions ) => {

    const { type, payload } = actions

    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload
            }
        default:
            return state;
    }

}

export default Dashboard
import * as type from '../types';

const intialState = {
    users: []
}

export default function users(state = intialState, action) {
    switch (action.type) {
        case type.GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}
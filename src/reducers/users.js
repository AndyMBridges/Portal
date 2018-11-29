import {actionTypes} from '../actions/users';

const users = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.USERS_LOAD_REQUEST :
            return {
                ...state,
                loading: true
            };
        case actionTypes.USERS_LOAD_SUCCESS :
            return {
                items: action.data,
                loading: false
            };
        case actionTypes.USERS_LOAD_FAILURE :
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default users;

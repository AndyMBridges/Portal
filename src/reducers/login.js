
import {actionTypes} from '../actions/login';

const initialState = {
    token: null,
    tokenExpiry: null
};

const login = (state = {payload: initialState}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                payload: {
                    token: action.token,
                    tokenExpiry: action.tokenExpiry
                },
                loading: false
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.CLEAR_TOKEN:
            return {
                payload: initialState
            };
        default:
            return state;
    }
};

export default login;

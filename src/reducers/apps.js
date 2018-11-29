import {actionTypes} from '../actions/apps';

const apps = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.APP_LOAD_REQUEST :
            return {
                ...state,
                loading: true
            };
        case actionTypes.APP_LOAD_SUCCESS :
            return {
                items: action.data,
                loading: false
            };
        case actionTypes.APP_LOAD_FAILURE :
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default apps;

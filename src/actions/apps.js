import {API_URL, headerOptions} from '../constants/api';

export const actionTypes = {
    APP_LOAD_REQUEST: 'APP_LOAD_REQUEST',
    APP_LOAD_SUCCESS: 'APP_LOAD_SUCCESS',
    APP_LOAD_FAILURE: 'APP_LOAD_FAILURE'
};

const requestOptions = ()  => ({
    method: 'GET',
    headers: {
        ...headerOptions,
        'Authorization': localStorage.getItem('token')
    }
});

const getApp = () => fetch(`${API_URL}/apps`, requestOptions());

export function loadApp(dispatch) {

    return async dispatch => {

        dispatch({type: actionTypes.APP_LOAD_REQUEST});

        try {
            const response = await getApp();
            const data = await response.json();

            dispatch({
                data: data.apps,
                type: actionTypes.APP_LOAD_SUCCESS
            });

        } catch (error) {
            dispatch({
                error,
                type: actionTypes.APP_LOAD_FAILURE
            });
        }

    };
};

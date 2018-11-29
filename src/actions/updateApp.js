import {API_URL, headerOptions} from '../constants/api';

export const actionTypes = {
    UPDATE_APP_REQUEST: 'UPDATE_APP_REQUEST',
    UPDATE_APP_SUCCESS: 'UPDATE_APP_SUCCESS',
    UPDATE_APP_FAILURE: 'UPDATE_APP_FAILURE'
};

const requestOptions = name => ({
    method: 'PUT',
    body: JSON.stringify({'name': name}),
    headers: {
        ...headerOptions,
        'Authorization': localStorage.getItem('token')
    }
});

const getApp = (appId, name) => fetch(`${API_URL}/apps/${appId}`, requestOptions(name));

export function updateApp(appId, name) {
    return async dispatch => {

        dispatch({type: actionTypes.UPDATE_APP_REQUEST});

        try {
            const response = await getApp(appId, name);
            const data = await response.json();

            dispatch({
                data,
                type: actionTypes.UPDATE_APP_SUCCESS
            });

        } catch (error) {
            dispatch({
                error,
                type: actionTypes.UPDATE_APP_FAILURE
            });
        }
    };
};

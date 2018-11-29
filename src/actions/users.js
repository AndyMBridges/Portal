import {API_URL, headerOptions} from '../constants/api';

export const actionTypes = {
    USERS_LOAD_REQUEST: 'USERS_LOAD_REQUEST',
    USERS_LOAD_SUCCESS: 'USERS_LOAD_SUCCESS',
    USERS_LOAD_FAILURE: 'USERS_LOAD_FAILURE'
};

const requestOptions = () => ({
    method: 'GET',
    headers: {
        ...headerOptions,
        'Authorization': localStorage.getItem('token')
    }
});

const getAppUsers = (appId, query) => {

    const url = query === undefined ? `${API_URL}/apps/${appId}/users` :
        `${API_URL}/apps/${appId}/users${query}`;

    return fetch(url, requestOptions());

};

export function loadAppUsers(appId, query) {

    return async dispatch => {

        dispatch({type: actionTypes.USERS_LOAD_REQUEST});

        try {
            const response = await getAppUsers(appId, query);
            const data = await response.json();

            dispatch({
                data: data.users,
                type: actionTypes.USERS_LOAD_SUCCESS
            });

        } catch (error) {
            dispatch({
                error,
                type: actionTypes.USERS_LOAD_FAILURE
            });
        }

    };
};

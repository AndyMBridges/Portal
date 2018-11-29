import {API_URL, headerOptions} from '../constants/api';
import {history} from '../helpers/history';

export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    CLEAR_TOKEN: 'CLEAR_TOKEN'
};

const requestOptions = user => {

    const {email, password} = user;

    return {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            expiry: '180s'
        }),
        headers: headerOptions
    };
};

const getApp = user => fetch(`${API_URL}/login`, requestOptions(user));

export const login = user => {
    return async dispatch => {

        dispatch({
            type: actionTypes.LOGIN_REQUEST,
            data: user
        });

        try {
            const response = await getApp(user);
            const data = await response.json();

            if (!data.accessToken || data.error) {
                dispatch({
                    type: actionTypes.LOGIN_FAILURE,
                    error: data.error
                });
            } else {
                dispatch(saveToken(data.accessToken));
            }
        } catch (error) {
            dispatch({
                type: actionTypes.LOGIN_FAILURE,
                error
            });
        }
    };
};

export const saveToken = token => {
    return async dispatch => {

        try {

            const response = await fetch(`${API_URL}/`, {
                method: 'GET',
                headers: {
                    ...headerOptions,
                    'Authorization': token
                }
            });

            const data = await response.json();

            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                token,
                tokenExpiry: data.token.exp
            });
            localStorage.setItem('token', token);
            localStorage.setItem('tokenExpiry', data.token.exp);
            history.push('/apps');

        } catch (error) {
            dispatch({
                type: actionTypes.LOGIN_FAILURE,
                error
            });
        }
    };
};

export const clearToken = dispatch => {
    history.push('/');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    dispatch({
        type: actionTypes.CLEAR_TOKEN
    });
};

export const logout = () => {
    return dispatch => {
        clearToken(dispatch);
    };
};

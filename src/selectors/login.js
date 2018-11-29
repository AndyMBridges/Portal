const getState = state => state || {};

export const getLogin = state => getState(state).login || {};

export default {
    getLogin
};

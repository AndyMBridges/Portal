const getState = state => state || {};

export const getUsers = state => getState(state).users || {};

export default {
    getUsers
};

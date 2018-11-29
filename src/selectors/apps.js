const getState = state => state || {};

export const getApps = state => getState(state).apps || {};

export default {
    getApps
};

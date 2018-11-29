import {combineReducers} from 'redux';

import apps from './apps';
import users from './users';
import login from './login';

const reducers = combineReducers({
    apps,
    users,
    login
});

export default reducers;

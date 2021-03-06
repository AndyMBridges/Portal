//@flow
import React, {Component} from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';
import {history} from './helpers/history';
import {PrivateRoute} from './helpers/privateRoute';
import {logout} from './actions/login';
import LoginSelectors from './selectors/login';

import Header from './components/Header';
import {Loading} from './components/Loading';

import {GlobalStyle} from './theme/GlobalStyle';

type TestProps = {
    logout: () => void,
    getLogin: {
        payload: {
            token: string
        },
        error?: string
    }
}

const Apps = Loadable({
    loader: () => import(/* webpackChunkName: "AppsChunk" */ './containers/Apps'),
    loading: Loading
});

const Login = Loadable({
    loader: () => import(/* webpackChunkName: "LoginChunk" */ './containers/Login'),
    loading: Loading
});

const Users = Loadable({
    loader: () => import(/* webpackChunkName: "UsersChunk" */ './containers/Users'),
    loading: Loading
});

class App extends Component<TestProps> {

    handleLogout = () => {
        this.props.logout();
    }

    render() {

        const isLoggedIn = !this.props.getLogin.payload || this.props.getLogin.payload.token === null ?
            false : true;

        return (
            <div className="wrapper">
                <GlobalStyle />
                <Router history={history}>
                    <div>
                        {isLoggedIn && <Header logout={this.handleLogout}/>}
                        <div className="main">
                            <Switch>
                                <PrivateRoute exact path="/apps" component={Apps} />
                                <PrivateRoute path="/apps/:appId" component={Users} />
                                <Route path="/" component={Login} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        getLogin: LoginSelectors.getLogin(state)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

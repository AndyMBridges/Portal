//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import UserSelectors from '../selectors/users';
import LoginSelectors from '../selectors/login';
import {loadAppUsers} from '../actions/users';
import {Loading} from '../components/Loading';
import {Button} from '../theme/Form';
import {Image, Title, ContentWrap, ContentItem} from '../theme/GlobalStyle';

const Email = styled.a`
    margin: 1rem auto;
    color: #00a0d6;
`;

type Content = {
    avatar: string,
    email: string,
    id: string,
    name: string
}

type TestProps = {
    getUsers: {
        items: Array<Content>,
        loading: boolean
    },
    loadAppUsers: (string, string) => void,
    match: {
        params: {
            appId: string
        }
    }
}

type TestState = {
    moreUsers: boolean
}

class AppUsers extends Component<TestProps, TestState> {

    state = {
        moreUsers: false
    };

    componentDidMount() {
        this.props.loadAppUsers(this.props.match.params.appId, '');
    }

    renderUser(user) {

        const {id, name, email, avatar} = user;

        return (
            <ContentItem key={id}>
                <h2>{name}</h2>
                <Email href={`mailto:${email}`}>{email}</Email>
                {avatar && <Image src={avatar} alt={name}/>}
            </ContentItem>
        );

    }

    getUsers = () => {

        const query = !this.state.moreUsers ? '?offset=25' : '';

        this.setState({
            moreUsers: !this.state.moreUsers
        });

        this.props.loadAppUsers(this.props.match.params.appId, query);

    }

    render() {

        const {getUsers} = this.props;

        return (
            <div>
                <Title>Users</Title>
                {getUsers && getUsers.items ? (
                    <div>
                        <ContentWrap>{getUsers.items.map(user => this.renderUser(user))}</ContentWrap>
                        <Button onClick={this.getUsers}>
                            {this.state.moreUsers ? 'Previous users' : 'Next users'}
                        </Button>
                    </div>
                ) : <Loading />}
            </div>
        );

    }

}

const mapStateToProps = state => {

    return {
        getUsers: UserSelectors.getUsers(state),
        getLogin: LoginSelectors.getLogin(state)
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        loadAppUsers: (appId, query) => dispatch(loadAppUsers(appId, query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppUsers);

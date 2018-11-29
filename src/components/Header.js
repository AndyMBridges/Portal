import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Logout = styled.button`
    height: 40px;
    padding: 0 1rem;
    font-size: .8rem;
    text-transform: uppercase;
    color: #FFF;
    border-radius: 3px;
    background-color: #00a0d6;
    border: 0;
    cursor: pointer;
    transition: .2s linear;
    &:hover {
        background-color: #008dbd;
    }
`;

const Head = styled.header`
    padding: 2rem;
    text-align: right;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin: 0 1rem;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
`;

const MenuLink = styled(Link)`
    color: #FFF;
    transition: .2s linear;
    &:hover {
        color: #00a0d6;
    }
    &:first-child {
        margin-right: 1rem;
    }
`;

const Header = ({logout}) => {

    return (
        <Head>
            <Menu>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/apps">Apps</MenuLink>
            </Menu>
            <Logout onClick={logout}>Logout</Logout>
        </Head>
    );

};

export default Header;

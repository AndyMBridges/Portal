import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled.button`
    height: 40px;
    width: 100%;
    color: #FFF;
    border-radius: 3px;
    background-color: #005E85;
    margin: 1rem auto 0 auto;
    border: 0;
    font-size: .8rem;
    text-transform: uppercase;
    max-width: 700px;
    cursor: pointer;
    transition: .2s linear;
    &:hover {
      background-color: #008dbd;
    }
`;

export const ButtonSecondary = styled(Link)`
    height: 40px;
    width: 100%;
    color: #FFF;
    border-radius: 3px;
    background-color: #4d5870;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: .8rem;
    text-transform: uppercase;
    margin-top: 1rem;
    border: 0;
    cursor: pointer;
    transition: .2s linear;
    &:hover {
        background-color: #3d4658;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #14233c;
    font-size: 0.8em;
    margin: 0.5em 0;
    position: relative;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: ${props => props.border || '1px solid #ccc'};
    background-color: #fff;
    margin-top: 1rem;
    padding: 0 1rem;
    border-radius: 3px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background: #FFF;
    width: 100%;
    text-align: left;
`;

export const Text = styled.p`
  color: ${props => props.color || '#4d4d4d'};
  font-size: .8rem;
`;

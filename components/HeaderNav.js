import React from 'react';
import styled from 'styled-components';

const Nav = styled.ul`
    width: 487px;
    height: 19px;
    li { 
        display: inline;
        list-style: none;
        float: right;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        padding-right: 30px
    };
    a {
        text-decoration: none;
        font-size: 16px;
        line-height: 25px;
        color: ${(props) => props.theme.palette.grey.main}
    };   
    `;

const HeaderNav = () => <Nav>
    <li><a href={'/'}>{'Acheter'}</a></li>
    <li><a href={'/'}>{'Conseils'}</a></li>
    <li><a href={'/'}>{'Qui sommes-nous ?'}</a></li>
</Nav>;

export default HeaderNav;

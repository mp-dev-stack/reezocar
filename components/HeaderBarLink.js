import styled from 'styled-components';

const HeaderBarLink = styled.a`
    display: block;
    width: 230px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.primary.main};
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 48px;
    font-weight: 800;
    color: ${(props) => props.theme.palette.white.main}`;

export default HeaderBarLink;

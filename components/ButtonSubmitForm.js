import styled from 'styled-components';

const ButtonSubmitForm = styled.button`
    margin-top: 20px;
    margin-left: 10px;
    border: none;
    outline: none;
    height: 64px;
    width: 230px;
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.palette.white.main};
    background-color: ${(props) => props.theme.palette.primary.main};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

export default ButtonSubmitForm;

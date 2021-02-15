import React from 'react';

import styled from 'styled-components';

const InputForm = styled.div`
position: relative;
input, label {
    color: ${(props) => props.theme.palette.grey.main};
};
margin-left: 10px;
label {
    display: inline-block;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
    };
input {
    display: block;
    width: 100%;
    height: 62px;
    border: 1px solid ${(props) => props.theme.palette.grey.light};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.white.main};
    font-family: Montserrat;
    font-size: 18px;
    line-height: 60px;
    outline: none;
    padding: 0 70px 0 24px;
    box-sizing: border-box;
    :focus {
        border: 1px solid ${(props) => props.theme.palette.grey.main}
    };
}

input::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.palette.grey.light};    
}

button {
    position: absolute;
    width: 64px;
    height: 60px;
    right: 1px;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.palette.white.main};
    border-radius: ${(props) => { const br = props.theme.borderRadius; return `0px ${br} ${br} 0px`; }};
}
#divider {
    position: absolute;
    right: 65px;
    height: 33px;
    width: 2px;
    background-color: ${(props) => props.theme.palette.grey.light}
}
a {
    position: absolute;
    top: 110px;
    left: 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: ${(props) => props.theme.palette.primary.main};
}
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 400px;
    margin-top: 16px;
`;

const InputFormSearch = ({ label, ...rest }) => <InputForm>
    <label>
        {label}
        <InputContainer>
            <input type={'text'} {...rest} />
            <div id={'divider'}/>
            <button>
                <img src={'./images/vector.png'} alt={'vector'}/>
            </button>
        </InputContainer>
    </label>
    <a href={'/#'}>Autour de moi</a>
</InputForm>;

export default InputFormSearch;

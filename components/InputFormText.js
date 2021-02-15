import React from 'react';

import styled from 'styled-components';

const InputForm = styled.div`
input, label {
    color: ${(props) => props.theme.palette.grey.main};
};
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
    width: 400px;
    height: 62px;
    border: 1px solid #C6C6C6;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.white.main};
    font-family: Montserrat;
    font-size: 18px;
    line-height: 22px;
    outline: none;
    margin-top: 16px;
    padding: 0 0 0 24px;
    :focus {
        border: 1px solid ${(props) => props.theme.palette.grey.main}
    };
}

input::placeholder {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.palette.grey.light};    
}
`;

const InputFormText = ({ label, ...rest }) => <InputForm>
    <label>
        {label}
        <input type={'text'} {...rest} />
    </label>
</InputForm>;

export default InputFormText;

import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    outline: none;
    width: 285px;
    height: 48px;
    border: 1px solid #494949;
    background-color: #FFFFFF;
    border-radius: ${(props) => props.theme.borderRadius};
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 48px;
    color: #494949;
    img {
    margin-left: 10px;
      width: 22px;
     };
`;

const DropdownButton = ({ selectedValue }) => <Button>{selectedValue}<img src={'/images/vector1.png'} alt={'vector'}/></Button>;

DropdownButton.propTypes = {
  selectedValue: PropTypes.string,
};

export default DropdownButton;

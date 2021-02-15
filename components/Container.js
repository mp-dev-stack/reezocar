import React from 'react';
import * as PropTypes from 'prop-types';

const Container = ({ children, ...props }) => <section {...props}>{children}</section>;

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;

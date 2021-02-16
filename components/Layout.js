import React from 'react';
import Head from 'next/head';
import * as PropTypes from 'prop-types';

const Layout = ({
  children,
}) => (
        <div>
            <Head>
                <title>{'reezocar testing'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet"
                      href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap'/>
            </Head>

            {children}
        </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

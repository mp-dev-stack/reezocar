import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  GlobalStyle, Container, Logo,
} from '../components';

import { HeaderSection } from '../sections';
import defaultTheme from '../theme';

const App = () => <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
        <HeaderSection/>
    </ThemeProvider>;

export default App;

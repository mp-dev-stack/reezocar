import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  GlobalStyle, Layout,
} from '../components';

import { HeaderSection, AvisSection, SearchCarSection } from '../sections';
import defaultTheme from '../theme';

const App = () => <Layout>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
        <HeaderSection/>
        <AvisSection/>
        <SearchCarSection/>
    </ThemeProvider>
</Layout>;

export default App;

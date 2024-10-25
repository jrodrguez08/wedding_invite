import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';

import theme from './src/theme';

import './src/styles/reset.css';

const cache = createCache({ key: 'css' });

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>{element}</CacheProvider>
    </ThemeProvider>
);

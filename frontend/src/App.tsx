import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import Router from './router/Routes';
import GlobalHeader from './components/GlobalHeader';

import GlobalFonts from './fonts/GlobalFonts';

import { muiTheme } from './config/theme';
import { publicUrls } from './config';

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <GlobalFonts />
      <div className="App">
        <BrowserRouter>
          <GlobalHeader />
          <Router />
          <header className="App-header">
            <Link to={publicUrls.dashboard}>Redirect</Link>
          </header>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

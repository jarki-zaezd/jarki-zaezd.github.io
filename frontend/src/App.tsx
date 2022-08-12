import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Router from './router/Routes';

import { publicUrls } from './config';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <header className="App-header">
          <Link to={publicUrls.dashboard}>Redirect</Link>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

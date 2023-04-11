import React from 'react';
import Versions from './syscom/versions.js'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Main from './main.js';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Main />
        <p> <Versions /> </p>
      </ThemeProvider>
    </div>
  );
}

export default App;

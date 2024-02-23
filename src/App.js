import React, {Component} from 'react';
import './App.css';
import AppTer from './component/AppTer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './component/Routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

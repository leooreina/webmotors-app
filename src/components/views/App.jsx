import React from 'react';
import '../styles/App.scss';
import BoxFilters from '../views/BoxFilters';
import webmotorsLogo from '../../assets/images/webmotors-logo.png';

function App() {
  return (
    <div className="App">
      <img
        className="logo-webmotors" 
        src={webmotorsLogo} 
        width="240"
        alt="webmotors logo"
      />
      <BoxFilters/>
    </div>
  );
}

export default App;

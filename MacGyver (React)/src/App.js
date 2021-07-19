import React from 'react';
import './App.css';
import LogoHeader from './Imagens/logo--header.png';

function App() {
  return (
    <div className="App">

      <header>
        <div className="LogoHeader">
          <img src={LogoHeader} />
        </div>
      </header>

      <footer>
        <div className="Rodape">
        </div>
      </footer>

    </div>
  );
}

export default App;
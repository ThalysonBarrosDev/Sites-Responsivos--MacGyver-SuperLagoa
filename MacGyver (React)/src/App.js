import React from 'react';
import './App.css';
import logoHeader from './Imagens/logo--header.png';

function App() {
  return (
    <div className="App">

      <header>
        <div className="logoHeader">
          <img src={logoHeader} />
        </div>
      </header>

      <footer>
        <div className="rodape">
          <p>Copyright © <a href="https://www.superlagoa.com.br" target="_block">Super Lagoa</a> | Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
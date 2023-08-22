import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Nav from './components/Nav';
import SideBar from './components/SideBar/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GestaoTarefas from './pages/GestaoTarefas';
import CadastroClientes from './pages/CadastroClientes';

const App = () => {
  return(
      <BrowserRouter>
        <div id="mainContent">
          <Nav />
          <div className='content'>
            <SideBar />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/gestao-de-tarefas' element={<GestaoTarefas />} />
                    <Route path='/cadastro-de-clientes' element={<CadastroClientes />} />
                  </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

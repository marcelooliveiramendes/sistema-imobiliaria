import React from 'react';
import './SideBar.scss'
import { Link } from 'react-router-dom';

// import { Container } from './styles';
function SideBar() {
  return(
    <nav> 
      <Link to="/">Home</Link>
      <Link to="/gestao-de-tarefas">Gestão de Tarefas</Link>
      <Link to="/">Contratos</Link>
      <Link to="/">Visitas</Link>
      <Link to="/">Calendário</Link>
      <Link to="/">Propriedades</Link>
      <Link to="/">Clientes</Link>
      <Link to="/">Documentos</Link>
      <Link to="/">Relatóricos Financeiros</Link>
      <Link to="/">Cadastro de Imóveis</Link>
      <Link to="/cadastro-de-clientes">Cadastro de Clientes</Link>
    </nav>
  );
}

export default SideBar;
import React from 'react';
import './Home.scss'
import Card from '../../components/Card';

// import { Container } from './styles';

function Home() {
  return (
    <div className={'homeContainer'}>
        <h2>Dashboard</h2>
        <div className='content'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  );
}

export default Home;
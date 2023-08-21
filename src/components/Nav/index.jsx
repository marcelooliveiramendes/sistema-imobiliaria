import React from 'react';
import user from '../../img/user.png'
import './Nav.scss'

// import { Container } from './styles';

function Nav() {
  return(
    <div className='navBar'>
      <h1>iMobly</h1>
      <div className='userCard'>
          <img src={user} alt="" srcset="" />
          <p>Mascueco</p> 
      </div>
    </div>
  );
}

export default Nav;
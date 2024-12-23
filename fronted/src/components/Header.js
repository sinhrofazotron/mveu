import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox}) {


  return (
    <div className="Header">
      <div className="logo"> <p>Колесико</p></div>
      
      <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('Basket')}>Корзина</li>
        <li onClick={() => setPage('Lk')}>Личный кабинет</li>
      </ul>
      <UserBox setModalBox={setModalBox} />
    
    </div>
  );
}

export default Header;
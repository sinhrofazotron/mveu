import React from 'react';
import './Lk.css';


function Lk() {
  return (
    <div className="Lk">
        <div className='user-profile'>
        <img src='' alt='Фото профиля'/>  
        <botton>Загрузить</botton>
        <list>
         <li>  <input type='text' name='nickname' placeholder='Никнейм:'></input> </li>
         <li>  <input type='text' name='firstname' placeholder='Имя:'></input> </li> 
         <li> <input type='text' name='lastname' placeholder='Фамилия: '></input> </li>
         <li> Пол: М<input type='radio'></input> Ж<input type='radio'></input></li>
         <li> <input type='email' name='email' placeholder='E-mail: '></input> </li>
         <li> <input type='password' name='password' placeholder='Пароль: '></input></li>
         <li> <p>Дата рождения:</p></li>
         <li>  <input type='date' placeholder=''></input></li>
         </list>
          <botton>Сохранить</botton>
         
        </div>
             
    </div>
  );
}

export default Lk;

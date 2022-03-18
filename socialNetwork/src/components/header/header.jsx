import React from 'react';
import style from './header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbjpzXYd0C9dHaaWXZ_M3djx_e2GKVN8yHA&usqp=CAU" alt='img'></img>
    </header>
  )
}


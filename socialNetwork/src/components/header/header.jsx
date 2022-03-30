import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';

export const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbjpzXYd0C9dHaaWXZ_M3djx_e2GKVN8yHA&usqp=CAU"
        height="50px"
        alt="img"
      ></img>

      {props.isAuth ? <div>{props.login}</div> : <Link to="/login">Auth</Link>}
    </header>
  );
};

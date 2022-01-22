import React from 'react';
import style from './menu.module.css';


export const Menu = () => {
  return (
    <nav className={style.menu}>
      <a href="#">Profile</a>
      <a href="#">News</a>
      <a href="#">Messages</a>
      <a href="#">Music</a>
      <a href="#">Settings</a>
    </nav>
  )
}

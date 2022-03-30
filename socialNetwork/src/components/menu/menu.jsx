import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './menu.module.css';

export const Menu = () => {
  return (
    <nav className={style.menu}>
      <NavLink
        className={(el) => (el.isActive ? style.link_active : style.link)}
        to="/profile/23044"
      >
        Profile
      </NavLink>
      <NavLink
        className={(el) => (el.isActive ? style.link_active : style.link)}
        to="/messages"
      >
        Messages
      </NavLink>
      <NavLink
        className={(el) => (el.isActive ? style.link_active : style.link)}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        className={(el) => (el.isActive ? style.link_active : style.link)}
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className={(el) => (el.isActive ? style.link_active : style.link)}
        to="/music"
      >
        Music
      </NavLink>
      <NavLink
        className={(el) => (el.isActive ? style.link_active : style.link)}
        to="/settings"
      >
        Settings
      </NavLink>
    </nav>
  );
};

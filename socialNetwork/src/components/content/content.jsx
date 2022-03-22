import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './content.module.css';
import { Profile } from './profile';
import { Messages } from './messages';
import { News } from './news';
import { Music } from './music';
import { Settings } from './settings';
import UsersContainer from './users/usersContainer';

export const Content = (props) => {
  return (
    <div className={style.content}>
      <Routes>
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/messages"
          element={<Messages />}
        />
        <Route
          path="/users"
          element={<UsersContainer />}
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/music"
          element={<Music/>}
        />
        <Route
          path="/settings"
          element={<Settings/>}
        />
        </Routes>
    </div>
  )
}


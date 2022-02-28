import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './content.module.css';
import { Profile } from './profile';
import { Messages } from './messages';
import { News } from './news';
import { Music } from './music';
import { Settings } from './settings';

export const Content = (props) => {
  return (
    <div className={style.content}>
      <Routes>
        <Route
          path="/profile"
          element={<Profile
            store={props.store}
          />}
        />
        <Route
          path="/messages"
          element={<Messages
            store={props.store}
          />}
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


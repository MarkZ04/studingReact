import React from 'react';
import style from './profile.module.css';
import { PostsList } from './postsList';
import { ProfileInfo } from './profileInfo';

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <PostsList
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </div>
  )
}

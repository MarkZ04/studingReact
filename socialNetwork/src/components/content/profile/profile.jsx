import React from 'react';
import style from './profile.module.css';
import { ProfileInfo } from './profileInfo';
import { PostsListContainer } from './postsList/postsListContainer';

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <PostsListContainer
        store={props.store}
      />
    </div>
  )
}

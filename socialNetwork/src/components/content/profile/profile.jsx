import React from 'react';
import { ProfileInfo } from './profileInfo';
import { PostsListContainer } from './postsList/postsListContainer';

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <PostsListContainer />
    </div>
  )
}

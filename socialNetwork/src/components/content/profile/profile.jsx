import React from 'react';
import { ProfileInfo } from './profileInfo';
import { PostsListContainer } from './postsList/postsListContainer';

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        fullName={props.userProfile.fullName}
        photoLarge={props.userProfile.photos.large}
        aboutMe={props.userProfile.aboutMe}
      />
      <PostsListContainer />
    </div>
  );
};

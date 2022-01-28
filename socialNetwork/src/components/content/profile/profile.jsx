import React from 'react';
import { PostsList } from './postsList';
import style from './profile.module.css';

export const Profile = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC1PJDR0WUeC_LVL1ZFhDcphCVecSwG7q5Q&usqp=CAU"></img>

      <PostsList />
    </div>
  )
}

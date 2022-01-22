import React from 'react';
import style from './profile.module.css';
import { PostsList } from './postsList';

export const Profile = () => {
  return (
    <div className={style.content}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC1PJDR0WUeC_LVL1ZFhDcphCVecSwG7q5Q&usqp=CAU"></img>

      <PostsList />
    </div>
  )
}

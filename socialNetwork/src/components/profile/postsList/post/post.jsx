import React from 'react';
import style from './post.module.css';

export const Post = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.ava} src='https://hornews.com/upload/images/blank-avatar.jpg'></img>
      <textarea></textarea>
      <button>Like</button>
    </div>
  )
}

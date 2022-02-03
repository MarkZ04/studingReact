import React from 'react';
import style from './post.module.css';

export const Post = (props) => {

  let like = null;
  function handler() {
    like === 'null' ? like = 1 : like++;
  }
  return (
    <div className={style.wrapper}>
      <img className={style.ava} src='https://hornews.com/upload/images/blank-avatar.jpg'></img>
      <div>
        {props.post }
      </div>
      <button onClick={handler}>Like</button>
      <div>{like}</div>
    </div>
  )
}

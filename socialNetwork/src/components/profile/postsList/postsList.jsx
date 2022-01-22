import React from 'react';
import { Post } from './post/post';
import style from './postsList.module.css';

export const PostsList = () => {
  return (
    <div>
      <h3>My posts</h3>
      <Post />
    </div>
  )
}

import React from 'react';
import { Post } from './post/post';
import style from './postsList.module.css';

export const PostsList = (props) => {

  const postsElements = props.postsData.map(el => <Post post={el.post} />);

  return (
    <div>
      <h3>My posts</h3>
      {postsElements}
    </div>
  )
}

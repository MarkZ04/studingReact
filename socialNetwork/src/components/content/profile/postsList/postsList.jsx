import React from 'react';
import style from './postsList.module.css';
import { Post } from './post/post';

export const PostsList = (props) => {

  const postsElements = props.postsData.map(el => <Post post={el.post} />);

  let newPost = React.createRef();

  let addNewPost = () => {
    props.addNewPost(newPost.current.value);
  };

  let newPostUpdate = () => {
    props.newPostUpdate(newPost.current.value);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={style.newPost}>
        <textarea
          ref={newPost}
          onChange={newPostUpdate}
          value={props.newPostValue}
          placeholder='New Post'
        />
        <button onClick={addNewPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

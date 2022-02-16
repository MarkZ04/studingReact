import React from 'react';
import { Post } from './post/post';
import style from './postsList.module.css';

export const PostsList = (props) => {

  const postsElements = props.profilePage.postsData.map(el => <Post post={el.post} />);
  let newPost = React.createRef();

  let addNewPost = () => {
    props.dispatch({type: 'ADD-NEW-POST', postMessage: newPost.current.value });
  };

  let newPostUpdate = () => {
    props.dispatch({type: 'NEW-POST-TEXT', currentValue: newPost.current.value })
  }

  return (
    <div>
      <h3>My posts</h3>
      <div className={style.newPost}>
        <textarea
          ref={newPost}
          onChange={newPostUpdate}
          value={props.profilePage.newPostValue}
          placeholder='New Post'
        />
        <button onClick={addNewPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

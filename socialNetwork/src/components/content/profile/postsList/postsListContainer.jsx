import React from 'react';
import { addNewPostActionCreator, newPostTextActionCreator } from '../../../../redux/profileReducer';
import { Post } from './post/post';
import {PostsList} from './postsList'

export const PostsListContainer = (props) => {

  const state = props.store.getState();
  const postsElements = state.profilePage.postsData.map(el => <Post post={el.post} />);

  let addNewPost = (text) => {
    props.store.dispatch(addNewPostActionCreator(text));
  };

  let newPostUpdate = (text) => {
    props.store.dispatch(newPostTextActionCreator(text));
  };

  return (
    <PostsList
      postsElements={postsElements}
      addNewPost={addNewPost}
      newPostUpdate={newPostUpdate}
      newPostValue={state.profilePage.newPostValue}
    />
  )
}

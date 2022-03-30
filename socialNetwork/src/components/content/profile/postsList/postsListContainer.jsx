import { connect } from 'react-redux';
import { addNewPostActionCreator, newPostTextActionCreator } from '../../../../redux/profileReducer';
import {PostsList} from './postsList'

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostValue: state.profilePage.newPostValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (text) => {
      dispatch(addNewPostActionCreator(text));
    },

    newPostUpdate: (text) => {
      dispatch(newPostTextActionCreator(text));
    }
  }
}

export const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList);
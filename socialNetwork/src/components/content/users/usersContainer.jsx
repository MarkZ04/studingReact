import { connect } from "react-redux";
import {
  followActionCreator,
  nofollowActionCreator,
  setUsersActionCreator
} from "../../../redux/usersReducer";
import { Users } from "./users";


let mapStateToProps = (state) => {
  
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    nofollow: (userId) => {
      dispatch(nofollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
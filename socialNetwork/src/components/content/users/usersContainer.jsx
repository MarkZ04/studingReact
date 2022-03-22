import React, {useEffect} from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  nofollowActionCreator,
  setUsersActionCreator,
  setUsersTotalCountAC,
  setCurrentUsersPageAC
} from "../../../redux/usersReducer";
import { Users } from "./users";
import * as axios from 'axios';

const UsersContainer = (props) => {

  useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentUsersPage}&count=${props.usersCount}`)
        .then(response => {
          props.setUsers(response.data.items);
          props.setUsersTotalCount(response.data.totalCount);
        })
  },[props.currentUsersPage, props.usersCount])
  
  return <Users
    totalCount={props.totalCount}
    usersCount={props.usersCount}
    setCurrentUsersPage={props.setCurrentUsersPage}
    nofollow={props.nofollow}
    follow={props.follow}
    users={props.users}
  />
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentUsersPage: state.usersPage.currentUsersPage,
    usersCount: state.usersPage.usersCount,
    totalCount: state.usersPage.totalCount
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
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    setCurrentUsersPage: (currentUsersPage) => {
      dispatch(setCurrentUsersPageAC(currentUsersPage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
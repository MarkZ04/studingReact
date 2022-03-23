import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {
  followAC,
  nofollowAC,
  setUsersAC,
  setUsersTotalCountAC,
  setCurrentUsersPageAC,
  toggleIsFetchingAC,
} from '../../../redux/usersReducer';
import { Users } from './users';
import { Preloader } from '../../common/preloader/preloader';

const UsersContainer = (props) => {
  useEffect(() => {
    props.toggleIsFetchingAC(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentUsersPage}&count=${props.usersCount}`
      )
      .then((response) => {
        props.toggleIsFetchingAC(false);
        props.setUsersAC(response.data.items);
        props.setUsersTotalCountAC(response.data.totalCount);
      });
  }, [props.currentUsersPage, props.usersCount]);

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Users
          totalCount={props.totalCount}
          usersCount={props.usersCount}
          setCurrentUsersPageAC={props.setCurrentUsersPageAC}
          nofollow={props.nofollow}
          follow={props.follow}
          users={props.users}
          isFetching={props.isFetching}
        />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentUsersPage: state.usersPage.currentUsersPage,
    usersCount: state.usersPage.usersCount,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  followAC,
  nofollowAC,
  setUsersAC,
  setUsersTotalCountAC,
  setCurrentUsersPageAC,
  toggleIsFetchingAC,
})(UsersContainer);

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     nofollow: (userId) => {
//       dispatch(nofollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setUsersTotalCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     setCurrentUsersPage: (currentUsersPage) => {
//       dispatch(setCurrentUsersPageAC(currentUsersPage));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  nofollowAC,
  setUsersAC,
  setUsersTotalCountAC,
  setCurrentUsersPageAC,
  toggleIsFetchingAC,
} from '../../../redux/usersReducer';
import { Users } from './users';
import { Preloader } from '../../common/preloader';
import { usersApi } from '../../../api';

const UsersContainer = (props) => {
  useEffect(() => {
    props.toggleIsFetchingAC(true);
    usersApi.getUsers(props.currentUsersPage, props.usersCount).then((data) => {
      props.toggleIsFetchingAC(false);
      props.setUsersAC(data.items);
      props.setUsersTotalCountAC(data.totalCount);
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
          nofollowAC={props.nofollowAC}
          followAC={props.followAC}
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

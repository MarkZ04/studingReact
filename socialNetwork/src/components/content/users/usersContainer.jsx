import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	setCurrentUsersPageAC,
	getUsersTC,
	nofollowTC,
	followTC,
} from '../../../redux/usersReducer';
import { Users } from './users';
import { Preloader } from '../../common/preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const UsersContainer = (props) => {
	useEffect(() => {
		props.getUsersTC(props.currentUsersPage, props.usersCount);
	}, [props.currentUsersPage, props.usersCount]);

	return <>{props.isFetching ? <Preloader /> : <Users {...props} />}</>;
};

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentUsersPage: state.usersPage.currentUsersPage,
		usersCount: state.usersPage.usersCount,
		totalCount: state.usersPage.totalCount,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		setCurrentUsersPageAC,
		getUsersTC,
		nofollowTC,
		followTC,
	})
)(UsersContainer);

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

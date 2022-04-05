import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfileTC } from '../../../redux/profileReducer';
import { Profile } from './profile';
import { Preloader } from '../../common/preloader/preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
	let { userId } = useParams();

	useEffect(() => {
		props.getProfileTC(userId);
	}, [userId]);

	return (
		<>
			{props.userProfile ? (
				<Profile userProfile={props.userProfile} />
			) : (
				<Preloader />
			)}
		</>
	);
};

let mapStateToProps = (state) => {
	return {
		userProfile: state.profilePage.userProfile,
	};
};

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getProfileTC })
)(ProfileContainer);

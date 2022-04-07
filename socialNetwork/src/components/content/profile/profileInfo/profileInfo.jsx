import React from 'react';
import { ProfileStatus } from './profileStatus/profileStatus';

export const ProfileInfo = (props) => {
	return (
		<div>
			<img src={props.photoLarge} alt='photo'></img>
			<div>{props.fullName}</div>
			<ProfileStatus />
			<div>{props.aboutMe}</div>
		</div>
	);
};

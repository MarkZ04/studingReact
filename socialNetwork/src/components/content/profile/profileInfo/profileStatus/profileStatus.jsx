import React, { useState } from 'react';

export const ProfileStatus = (props) => {
	const [status, setStatus] = useState('');
	const [editMode, setEditMode] = useState(false);

	const changeStatus = () => {
		setEditMode(!editMode);
	};

	const newStatus = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div>
			{editMode ? (
				<input onBlur={changeStatus} onChange={newStatus} value={status} />
			) : status === '' ? (
				<span onDoubleClick={changeStatus}>Status...</span>
			) : (
				<span onDoubleClick={changeStatus}>{status}</span>
			)}
		</div>
	);
};

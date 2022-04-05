import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './content.module.css';
import { News } from './news';
import { Music } from './music';
import { Settings } from './settings';
import UsersContainer from './users/usersContainer';
import ProfileContainer from './profile/profileContainer';
import { MessagesContainer } from './messages/messagesContainer';
import { Login } from './login';

export const Content = (props) => {
	return (
		<div className={style.content}>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/profile/:userId' element={<ProfileContainer />} />
				<Route path='/messages' element={<MessagesContainer />} />
				<Route path='/users' element={<UsersContainer />} />
				<Route path='/news' element={<News />} />
				<Route path='/music' element={<Music />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</div>
	);
};

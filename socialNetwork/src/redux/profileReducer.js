import { profileApi } from '../api';

const ADD_NEW_POST = 'ADD_NEW_POST';
const NEW_POST_TEXT = 'NEW_POST_TEXT';
const SET_USER_PROFILE_PAGE = 'SET_USER_PROFILE_PAGE';

const initialState = {
	userProfile: null,
	postsData: [
		{ id: 1, post: 'Hello world!' },
		{ id: 2, post: 'Hi!' },
	],
	newPostValue: '',
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_NEW_POST':
			return {
				...state,
				postsData: [...state.postsData, { id: 3, post: action.postMessage }],
				newPostValue: '',
			};

		case 'NEW_POST_TEXT':
			return {
				...state,
				newPostValue: action.currentValue,
			};

		case 'SET_USER_PROFILE_PAGE':
			return {
				...state,
				userProfile: { ...action.userProfile },
			};

		default:
			return state;
	}
};

// Action Creators
export const addNewPostActionCreator = (message) => ({
	type: ADD_NEW_POST,
	postMessage: message,
});
export const newPostTextActionCreator = (value) => ({
	type: NEW_POST_TEXT,
	currentValue: value,
});
export const setUserProfilePageAC = (userProfile) => ({
	type: SET_USER_PROFILE_PAGE,
	userProfile,
});

// Thunk Creators
export const getProfileTC = (userId) => {
	return (dispatch) => {
		profileApi
			.getProfile(userId)
			.then((data) => dispatch(setUserProfilePageAC(data)));
	};
};

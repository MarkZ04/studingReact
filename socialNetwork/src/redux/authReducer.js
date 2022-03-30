import { authApi } from '../api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const InitialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
};

export const authReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.userData,
				isAuth: true,
			};

		default:
			return state;
	}
};

// Action Creators
export const setAuthUserDataAC = (userData) => ({
	type: SET_AUTH_USER_DATA,
	userData,
});

// Thunk Creators
export const getAuthTC = () => {
	return (dispatch) => {
		authApi.getAuth().then((data) => dispatch(setAuthUserDataAC(data.data)));
	};
};

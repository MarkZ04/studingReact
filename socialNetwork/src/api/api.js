import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'dc5bc6f9-cdce-475d-8511-f5d17ac4642f',
	},
});

export const authApi = {
	getAuth() {
		return instance.get(`auth/me`).then((response) => response.data);
	},
};

export const profileApi = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data);
	},
};

export const usersApi = {
	getUsers(currentUsersPage, usersCount) {
		return instance
			.get(`users?page=${currentUsersPage}&count=${usersCount}`)
			.then((response) => response.data);
	},

	follow(userId) {
		return instance
			.post(`follow/${userId}`, null)
			.then((response) => response.data);
	},

	nofollow(userId) {
		return instance
			.delete(`follow/${userId}`)
			.then((response) => response.data);
	},
};

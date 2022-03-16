const USER_FOLLOW = 'USER_FOLLOW';
const USER_NOFOLLOW = 'USER_NOFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (action.userId === u.id) {
            return {
              ...u, follow: true
            }
          }
          return u;
        })
      }

    case USER_NOFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (action.userId === u.id) {
            return {
              ...u,
              follow: false
            }
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users] // ??????????????
      }

    default:
      return state;
  }
}

export const followActionCreator = (userId) => {
  return {
    type: USER_FOLLOW,
    userId
  }
}
export const nofollowActionCreator = (userId) => {
  return {
    type: USER_NOFOLLOW,
    userId
  }
}
export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users
  }
}
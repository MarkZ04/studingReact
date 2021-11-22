import { UPDATE_PROFILE } from "./types";

const initialState = {
  firstName: "firstName",
  lastName: "lastName",
  phone: "89123456789"
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_PROFILE: {
      return { ...state, ...action.payload }
    }
    default: {
      return state;
    }
  }
}
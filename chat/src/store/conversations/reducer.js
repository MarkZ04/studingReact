// import { SEND_MESSAGE } from "./types";

const initialState = {
  conversations: [
    {
      title: 'chat1',
      value: ''
    },
    {
      title: 'chat2',
      value: ''
    }
  ]
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {

    // case SEND_MESSAGE:
    //   return {
    //   }

    default: {
      return state;
    }
  }
}
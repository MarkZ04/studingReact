import {
  getMessagesError,
  getMessagesStart,
  getMessagesSuccess,
  messagesReducer,
  sendMessage,
} from "../../messages";
import { deleteConversation } from "../../conversations";


describe('message reduser', () => {

  it('send message', () => {
    const state = messagesReducer(
      { messages: {} },
      sendMessage({ author: 'Bot', message: 'Hello from Bot' }, 'chat1')
    );

    expect(state.messages.chat1.length).toBe(1);
    expect(state.messages.chat1[0].author).toBe('Bot');
    expect(state.messages.chat1[0].message).toBe('Hello from Bot');
  });

  it('delete conversation', () => {
    const state = messagesReducer(
      {
        messages: {
          chat1: []
        }
      },
      deleteConversation('chat1')
    );

    expect(state.messages.chat1).toBeUndefined();
  });

  it("get messages start", () => {
    const state = messagesReducer(
      {
        messagesLoading: false,
        messagesError: "some error",
      },
      getMessagesStart()
    );

    expect(state.messagesLoading).toBe(true);
    expect(state.messagesError).toBeNull();
  });

  it("get messages start success", () => {
    const MESSAGES = "test message";

    const state = messagesReducer(
      {
        messagesLoading: true,
        messages: {},
      },
      getMessagesSuccess(MESSAGES)
    );

    expect(state.messagesLoading).toBeFalsy();
    expect(state.messages).toBe(MESSAGES);
  });

  it("get messages error", () => {
    const ERROR = "test error";

    const state = messagesReducer(
      {
        messagesLoading: true,
        messagesError: null,
      },
      getMessagesError(ERROR)
    );

    expect(state.messagesLoading).toBeFalsy();
    expect(state.messagesError).toBe(ERROR);
  });
});


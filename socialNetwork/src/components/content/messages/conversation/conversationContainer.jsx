import { connect } from "react-redux";
import { addNewMessageActionCreator, newMessageTextActionCreator } from "../../../../redux/messagesReducer";
import { Conversation } from "./conversation";

const mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    newMessageValue: state.messagesPage.newMessageValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessageText: (text) => {
      dispatch(newMessageTextActionCreator(text));
    },
    sendMessage: (text) => {
      dispatch(addNewMessageActionCreator(text));
    }
  }
}

export const ConversationContainer = connect(mapStateToProps, mapDispatchToProps)(Conversation);
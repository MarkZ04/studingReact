import React from "react";
import { connect } from "react-redux";
import { Dialogs } from "./dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
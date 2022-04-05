import React from 'react';
import style from './messages.module.css';
import { ConversationContainer } from './conversation/conversationContainer';
import { DialogsContainer } from './dialogs/dialogsContainer';

export const Messages = (props) => {
	return (
		<div className={style.messages}>
			<DialogsContainer store={props.store} />
			<ConversationContainer store={props.store} />
		</div>
	);
};

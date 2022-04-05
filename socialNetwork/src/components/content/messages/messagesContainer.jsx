import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { Messages } from './messages';

export const MessagesContainer = compose(withAuthRedirect)(Messages);

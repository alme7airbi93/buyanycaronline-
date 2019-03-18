import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';

export default combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
});

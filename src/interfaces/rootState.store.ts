import { combineReducers } from 'redux';
import { keepReducer } from '../store/reducers/keep.reducer';
import { mailReducer } from '../store/reducers/mail.reducer';

export const rootReducer = combineReducers({
  keepModule: keepReducer,
  mailModule: mailReducer
});

export type RootState = ReturnType<typeof rootReducer>;
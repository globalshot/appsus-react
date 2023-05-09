import { combineReducers } from 'redux';
import { keepReducer } from '../store/reducers/keep.reducer';

export const rootReducer = combineReducers({
  keepModule: keepReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
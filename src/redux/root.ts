import {combineReducers} from 'redux';
import appReducer from './app/app.reducer';

export const rootReducers = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

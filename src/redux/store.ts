import {Store} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {rootReducers} from './root';

export function confStore(): Store {
  const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: [thunk],
  });

  return store;
}
const dispatch = confStore().dispatch;
export type AppDispatch = typeof dispatch;

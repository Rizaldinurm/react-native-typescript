import {createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';
import update from 'immutability-helper';
import {AppState, SetApp} from './type.d';

function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

export const setInitial = createAction(
  'SET_INITIAL',
  withPayloadType<SetApp>(),
);

const initialState: AppState = {
  token: '',
  session: '',
};

const appReducer = createReducer(initialState, {
  [setInitial.type]: (state, action: PayloadAction<SetApp>) => {
    return update(state, {
      token: {$set: action.payload.token},
      session: {$set: action.payload.session},
    });
  },
});
export default appReducer;

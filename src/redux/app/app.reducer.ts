import {createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';
import update from 'immutability-helper';
import {AppState, SetApp} from './type.d';
import {WithPayloadType, AppThunk} from '../../utils/redux';
import {AppDispatch} from '../store';
import {RootState} from '../root';
/**
 * Action
 * -----------------------
 */
export const setInitial = createAction(
  'SET_INITIAL',
  WithPayloadType<SetApp>(),
);

const initialState: AppState = {
  token: '',
  session: '',
};

/**
 * Reducer
 * -----------------------
 */

const appReducer = createReducer(initialState, {
  [setInitial.type]: (state, action: PayloadAction<SetApp>) => {
    return update(state, {
      token: {$set: action.payload.token},
      session: {$set: action.payload.session},
    });
  },
});
export default appReducer;

/**
 * Thunk
 * -----------------------
 */
export const getDataUser = (): AppThunk => (
  // AppDispatch is type of dispatch built in store.ts; You can dispatch where ever you want
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  const data: SetApp = {
    token: 'helloworld',
    session: 'munchen',
  };
  const a = getState();
  // there will be state redux
  console.log(a.app);
  dispatch(setInitial(data));
};

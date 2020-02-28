import {AppThunk} from '../../utils/redux';
import {PayloadActionCreator} from '@reduxjs/toolkit';
import {Reducer} from 'redux';

export = AppRedux;
export as namespace AppRedux;

declare namespace AppRedux {
  interface SetApp {
    token: string;
    session: string;
  }

  interface AppState {
    token: string;
    session: string;
  }

  const SetInitial: PayloadActionCreator;

  const InitialState: AppState;

  const AppReducers: Reducer<AppState>;

  function GetDataUser(): AppThunk;
}

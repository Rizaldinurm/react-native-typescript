import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../redux/root';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function WithPayloadType<T>() {
  return (t: T) => ({payload: t});
}

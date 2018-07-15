import { combineReducers } from 'redux'
import { ITimesheetsState, timesheetsReducer } from '../features/timesheets';

export interface IAppState {
  timesheets: ITimesheetsState;
}
​
export const rootReducer = combineReducers<IAppState>({
  timesheets: timesheetsReducer,
});

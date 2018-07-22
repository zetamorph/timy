import { combineReducers } from 'redux'
import { FormStateMap, reducer as formReducer } from 'redux-form';
import { ITimesheetState, timesheetReducer } from '../features/timesheets';

export interface IAppState {
  form: FormStateMap;
  timesheets: ITimesheetState;
}
​
export const rootReducer = combineReducers<IAppState>({
  form: formReducer,
  timesheets: timesheetReducer,
});

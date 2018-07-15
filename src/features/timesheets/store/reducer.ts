import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import * as timesheetActions from './actions';
import { ITimesheetsState } from "./models";

const initialState = {
  data: {},
  errors: '',
  loading: false,
}

type TimesheetsAction = ActionType<typeof timesheetActions>;

export const reducer: Reducer<ITimesheetsState, TimesheetsAction> = (state = initialState, action: TimesheetsAction) => {
  console.log(action);
  switch(action.type) {
    case getType(timesheetActions.create):
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

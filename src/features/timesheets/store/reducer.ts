import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as timesheetActions from './actions';
import { ITimesheetState } from './models';

const initialState = {
    data: {},
    errors: '',
    loading: false,
}

type TimesheetAction = ActionType<typeof timesheetActions>;

export const reducer: Reducer<ITimesheetState, TimesheetAction> = (state = initialState, action: TimesheetAction) => {
    switch (action.type) {
        case getType(timesheetActions.create): {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.id]: action.payload,
                },
            };
        }

        case getType(timesheetActions.deleteById): {
            const newData = { ...state.data };
            delete newData[action.payload];
            return {
                ...state,
                data: newData,
            };
        }
            
        case getType(timesheetActions.setCurrentTimesheet): {
            return {
                ...state,
                currentTimesheetId: action.payload,
            };
        }
            
        case getType(timesheetActions.updateById): {
            const updatedData = {
                ...state.data,
                [action.payload.id]: {
                    ...state.data[action.payload.id],
                    ...action.payload,
                },
            };
            return {
                ...state,
                data: updatedData,
            };
        }

        default: {
            return state;
        }
    }
};

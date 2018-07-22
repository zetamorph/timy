import { createStandardAction } from 'typesafe-actions';
import * as uuid from 'uuid/v4';
import { Timesheet } from './models';

export const create = createStandardAction('@@timesheets/CREATED')
    .map((payload: Partial<Timesheet>) => ({
        payload: {
            id: uuid(),
            ...payload,
        } as Timesheet,
    }));

export const deleteById = createStandardAction('@@timesheets/DELETED')
    .map((payload: string) => ({ payload }));

export const setCurrentTimesheet = createStandardAction('@@timesheets/SET_CURRENT_TIMESHEET')
    .map((payload: string) => ({ payload }));
    
export const updateById = createStandardAction('@@timesheets/UPDATED')
    .map((payload: Partial<Timesheet> & { id: string }) => ({ payload }));

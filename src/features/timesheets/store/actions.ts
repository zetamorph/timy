import { createStandardAction } from 'typesafe-actions';
import * as uuid from 'uuid/v4';
import { Timesheet } from './models';

export const create = createStandardAction('@@timesheets/CREATED').map((payload: Partial<Timesheet>) => ({
    payload: {
        id: uuid(),
        ...payload,
    } as Timesheet,
}));

export const deleteById = createStandardAction('@@timesheets/DELETED').map((payload: string) => ({
    payload,
}));

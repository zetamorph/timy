import { isAfter, subDays } from 'date-fns';
import { createSelector } from 'reselect';
import { IAppState } from '../../../store';
import { Timesheet } from './models';

export const timesheetsSelector = ({ timesheets: { data } }: IAppState) => Object.values(data);
export const byIdTimesheetsSelector = ({ timesheets: { data }}) => data;
export const currentTimesheetIdSelector = ({ timesheets: { currentTimesheetId } }: IAppState) => currentTimesheetId;

export const recentTimesheetsSelector = createSelector(
    timesheetsSelector,
    (timesheets: Timesheet[]) => timesheets
        .filter(timesheet => isAfter(
            timesheet.startDate,
            subDays(new Date(), 7),
        )),
);

export const currentTimesheetSelector = createSelector(
    byIdTimesheetsSelector,
    currentTimesheetIdSelector,
    (timesheets: Timesheet[], currentId: string): Timesheet | undefined => timesheets[currentId],
);

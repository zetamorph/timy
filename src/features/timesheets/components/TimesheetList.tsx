import { H1 } from '@blueprintjs/core';
import React from 'react';
import { Timesheet, timesheetActions } from '../store';
import { TimesheetListItem } from './TimesheetListItem';

interface IProps {
    timesheets: Timesheet[];
    deleteTimesheet: typeof timesheetActions.deleteById;
    editTimesheet: typeof timesheetActions.setCurrentTimesheet;
}

export const TimesheetList = ({ deleteTimesheet, editTimesheet, timesheets }: IProps) => {
    return (
        <div style={{ width: '50vw', padding: '1rem' }}>
            <H1 style={{ textAlign: 'center' }}>All your timesheets</H1>
            {
                timesheets.length ?
                    timesheets.map(timesheet => (
                        <TimesheetListItem
                            key={timesheet.id}
                            deleteById={deleteTimesheet}
                            editTimesheet={editTimesheet}
                            timesheet={timesheet}
                        />
                    ))
                    : <p style={{
                        textAlign: 'center'
                    }}>You don´t have any timesheets yet</p>
            }
        </div>
    );
};

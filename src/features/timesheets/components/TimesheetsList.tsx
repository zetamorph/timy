import { Card, Elevation, H1 } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../store';
import { ITimesheetsState } from '../store';

interface IPropsFromState {
    timesheets: ITimesheetsState;
}

class TimesheetsList extends React.Component<IPropsFromState, {}> {
    public render() {
        const allTimesheets = Object.values(this.props.timesheets.data);
        return (
            <div style={{ width: '50vw', padding: '1rem' }}>
                <H1 style={{ textAlign: 'center' }}>All your timesheets</H1>
                {allTimesheets.map(timesheet =>
                    <Card
                        key={timesheet.id}
                        elevation={Elevation.THREE}
                        style={{ marginTop: '0.5rem' }}
                    >
                        <span style={{ fontWeight: 'bold' }}>
                            { timesheet.start.toLocaleString() } : 
                        </span>
                        <span>
                            { timesheet.duration }
                        </span>
                    </Card>
                )}
            </div>
        );
    }
}

export const withState = connect(({ timesheets }: IAppState) => ({ timesheets }))(TimesheetsList);

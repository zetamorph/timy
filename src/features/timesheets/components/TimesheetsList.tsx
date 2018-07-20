import { H1 } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../store';
import { ITimesheetsState, timesheetsActions } from '../store';
import { TimesheetsListItem } from './TimesheetsListItem';

interface IPropsFromState {
    timesheets: ITimesheetsState;
}

interface IPropsFromDispatch {
    deleteTimesheet: typeof timesheetsActions.deleteById;
}

type IProps = IPropsFromState & IPropsFromDispatch;

class TimesheetsList extends React.Component<IProps, {}> {
    
    constructor(props) {
        super(props);

        this.deleteTimesheet = this.deleteTimesheet.bind(this);
    }
    
    public deleteTimesheet(id: string) {
        this.props.deleteTimesheet(id);
    }
    
    public render() {
        const allTimesheets = Object.values(this.props.timesheets.data);
        return (
            <div style={{ width: '50vw', padding: '1rem' }}>
                <H1 style={{ textAlign: 'center' }}>All your timesheets</H1>
                {allTimesheets.map(timesheet =>
                    <TimesheetsListItem key={timesheet.id} deleteById={this.deleteTimesheet} timesheet={timesheet} />
                )}
            </div>
        );
    }
}

const mapDispatchToProps = {
    deleteTimesheet: (id: string) => timesheetsActions.deleteById(id),
};

export const withState = connect(
    ({ timesheets }: IAppState) => ({ timesheets }),
    mapDispatchToProps,
)(TimesheetsList);
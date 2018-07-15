import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../store';
import { ITimesheetsState } from '../store';

interface IPropsFromState {
  timesheets: ITimesheetsState;
}

class TimesheetsList extends React.Component<IPropsFromState, {}> {
  public render () {
    console.log(this.props);
    const allTimesheets = Object.values(this.props.timesheets.data);
    return (
      <ul>
        { allTimesheets.map(timesheet => <li key={timesheet.id}>{ timesheet.id }</li>) }
      </ul>
    );
  }
}

export const withState = connect(
  ({ timesheets }: IAppState) => ({ timesheets })
)(TimesheetsList);

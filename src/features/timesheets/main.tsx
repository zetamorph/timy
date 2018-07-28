import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../store';
import { RecentTimesheets } from './containers/RecentTimesheets';
import { TimesheetFormContainer } from './containers/TimesheetFormContainer';
import { timesheetSelectors } from './store';

interface IPropsFromState {
    currentTimesheetId: string;
}

export const TimesheetPageContainer = (props: IPropsFromState) => (
    <React.Fragment>
        <div style={{
            display: 'flex',
        }}>
            <TimesheetFormContainer />
            <br />
            <RecentTimesheets />
        </div>
    </React.Fragment>
);

const mapStateToProps = (state: IAppState) => ({
    currentTimesheetId: timesheetSelectors.currentTimesheetIdSelector(state),
});

export const TimesheetPage = connect(
    mapStateToProps,
)(TimesheetPageContainer);





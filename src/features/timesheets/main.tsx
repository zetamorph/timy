import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../store';
import { CreateTimesheetForm } from './containers/CreateTimesheetForm';
import { EditTimesheetForm } from './containers/EditTimesheetForm';
import { RecentTimesheets } from './containers/RecentTimesheets';
import { timesheetSelectors } from './store';

interface IPropsFromState {
    currentTimesheetId: string;
}

export const TimesheetsPageContainer = (props: IPropsFromState) => (
    <React.Fragment>
        <div style={{
            display: 'flex',
        }}>
            {
                props.currentTimesheetId ?
                <EditTimesheetForm /> :
                <CreateTimesheetForm />
            }
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
)(TimesheetsPageContainer);





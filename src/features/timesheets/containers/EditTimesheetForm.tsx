import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../store';
import { TimesheetForm } from '../components/TimesheetForm';
import { Timesheet, timesheetActions, timesheetSelectors } from '../store';

const mapStateToProps = (state: IAppState) => ({
    initialValues: timesheetSelectors.currentTimesheetSelector(state),
});

const mapDispatchToProps = {
    onSubmit: (values: Timesheet) => timesheetActions.updateById(values),
};

const EditTimesheetFormContainer = (props) => (
    <TimesheetForm {...props} onSubmit={props.onSubmit}/>
);

export const EditTimesheetForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditTimesheetFormContainer);
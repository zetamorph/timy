import React from 'react';
import { connect } from 'react-redux';
import { TimesheetForm } from '../components/TimesheetForm';
import { Timesheet, timesheetActions } from '../store';

const mapStateToProps = _ => ({
    initialValues: {
        description: '',
        duration: 0,
        startDate: new Date(),
    },
});

const mapDispatchToProps = {
    onSubmit: (values: Timesheet) => timesheetActions.create(values),
};

const CreateTimesheetFormContainer = (props) => (
    <TimesheetForm {...props} onSubmit={props.onSubmit}/>
);

export const CreateTimesheetForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateTimesheetFormContainer);

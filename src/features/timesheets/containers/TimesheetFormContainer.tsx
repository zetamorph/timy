import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SubmitHandler } from 'redux-form';
import { IAppState } from '../../../store';
import { TimesheetForm } from '../components/TimesheetForm';
import { Timesheet, timesheetActions, timesheetSelectors } from '../store';

interface IPropsFromState {
    id: string | undefined;
    initialValues: Partial<Timesheet>;
}

interface IPropsFromDispatch {
    onSubmit: SubmitHandler<Partial<Timesheet>, IProps>
}

type IProps = IPropsFromState & IPropsFromDispatch;

const mapStateToProps = (state: IAppState): IPropsFromState => ({
    id: timesheetSelectors.currentTimesheetIdSelector(state),
    initialValues: timesheetSelectors.currentTimesheetSelector(state) || {
        description: '',
        duration: 30,
        startDate: new Date(),
    } as Partial<Timesheet>,
});

const mapDispatchToProps = {
    onSubmit: (values: Timesheet, _: Dispatch, { id }: IPropsFromState) => id
        ? timesheetActions.updateById({ ...values, id })
        : timesheetActions.create(values),
};

export const TimesheetFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    (props: IProps) => <TimesheetForm {...props} onSubmit={props.onSubmit}/>,
);
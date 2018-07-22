import React from 'react';
import { Dispatch } from 'redux';
import { InjectedFormProps, reduxForm, reset } from 'redux-form';
import { ITimesheetFormData, TimesheetForm } from '../components/TimesheetForm';
import { timesheetActions } from '../store';

const FORM_NAME = 'AddTimesheet';

class AddTimesheetContainer extends React.Component<InjectedFormProps<ITimesheetFormData, any>> {
    
    constructor(props) {
        super(props);
    }
    
    public handleSubmit = (values: ITimesheetFormData, dispatch: Dispatch) => {
        dispatch(timesheetActions.create(values));
        dispatch(reset(FORM_NAME));
    }

    public render() {
        return (
            <TimesheetForm
                {...this.props}
                handleSubmit={this.props.handleSubmit(this.handleSubmit)}
            />
        )
    }
}

export const AddTimesheet = reduxForm({
    form: FORM_NAME,
    initialValues: {
        description: '',
        duration: 0,
        startDate: new Date(),
    },
})(AddTimesheetContainer);

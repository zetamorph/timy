import { Button } from '@blueprintjs/core';
import { TimePicker } from '@blueprintjs/datetime';
import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../store';
import { ITimesheetsState, Timesheet, timesheetsActions } from '../store';

interface IPropsFromState {
    timesheets: ITimesheetsState;
}

interface IPropsFromDispatch {
    createTimeSheet: typeof timesheetsActions.create;
}

type IProps = IPropsFromDispatch & IPropsFromState;

interface IComponentState {
    currentTime: Date;
}

class TimesheetsForm extends React.Component<IProps, IComponentState> {
    
    public state = {
        currentTime: new Date(0),
    }
    
    constructor(props) {
        super(props);

        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.submitTimesheet = this.submitTimesheet.bind(this);
    }
    
    public handleTimeChange (currentTime: Date): void {
        this.setState({
            currentTime,
        });
    }
    
    public submitTimesheet () {
        console.log(this.state.currentTime);
        this.props.createTimeSheet({
            start: this.state.currentTime,
        });
    }
    
    public render () {
        return (
            <React.Fragment>
                <TimePicker
                    showArrowButtons={true}
                    onChange={this.handleTimeChange}
                    value={this.state.currentTime}
                />
                <Button
                    onClick={this.submitTimesheet}
                >
                    Add
                </Button>
            </React.Fragment>
        )
    }
}

export const withState = connect(
    ({ timesheets }: IAppState) => ({ timesheets }), {
        createTimeSheet: (data: Partial<Timesheet>) =>timesheetsActions.create(data),
    },
)(TimesheetsForm);

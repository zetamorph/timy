import { Button, H4, InputGroup, NumericInput, TextArea } from '@blueprintjs/core';
import { DatePicker, TimePicker } from '@blueprintjs/datetime';
import React, { CSSProperties } from 'react';
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
    duration: number;
    startTime: Date;
}

class TimesheetsForm extends React.Component<IProps, IComponentState> {
    public state: IComponentState = {
        duration: 0,
        startTime: new Date(),
    };
    
    public convenienceIncrements = [30, 60];

    constructor(props) {
        super(props);

        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.submitTimesheet = this.submitTimesheet.bind(this);
        this.resetStartTime = this.resetStartTime.bind(this);
    }

    public handleStartTimeChange(startTime: Date): void {
        this.setState({
            startTime,
        });
    }
    
    public resetStartTime(): void {
        this.setState({
            startTime: new Date(),
        });
    }

    public handleDurationChange(duration: number): void {
        this.setState({
            duration,
        });
    }

    public submitTimesheet() {
        this.props.createTimeSheet({
            duration: this.state.duration,
            start: this.state.startTime,
        });
    }
    
    public setDuration(duration: number) {
        return () => this.setState({
            duration,
        });
    }

    public render() {
        const flexItemStyles: CSSProperties = {
            margin: '1rem',
        };
        
        const h4Styles: CSSProperties = {
            marginTop: '1rem',
            textAlign: 'center',
        }

        return (
            <React.Fragment>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50vw',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <DatePicker />
                        <br />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            <div style={flexItemStyles}>
                                <H4 style={h4Styles}>Start</H4>
                                <TimePicker
                                    showArrowButtons={true}
                                    onChange={this.handleStartTimeChange}
                                    value={this.state.startTime}
                                />
                                <Button
                                    onClick={this.resetStartTime}
                                    intent="none"
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    Now
                                </Button>
                            </div>
                            <div style={flexItemStyles}>
                                <H4 style={h4Styles}>Duration</H4>
                                <NumericInput value={this.state.duration}/>
                                {
                                    this.convenienceIncrements.map(increment => (
                                        <Button
                                            intent="none"
                                            key={increment}
                                            onClick={this.setDuration(increment)}
                                        >
                                            {increment}
                                        </Button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <br />
                    <H4 style={h4Styles} >Title</H4>
                    <InputGroup />
                    <H4 style={h4Styles}>Description</H4>
                    <TextArea />
                    <br />
                    <Button
                        onClick={this.submitTimesheet}
                        intent="primary"
                    >Add</Button>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = {
    createTimeSheet: (data: Partial<Timesheet>) => timesheetsActions.create(data),
};

export const withState = connect(
    ({ timesheets }: IAppState) => ({ timesheets }),
    mapDispatchToProps,
)(TimesheetsForm);

import { Button, H4 } from '@blueprintjs/core';
import React, { CSSProperties } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { length, required } from 'redux-form-validators';
import { renderDateTimePicker, renderTextInput, renderTimePicker } from '../../../renderers';
import { Timesheet } from '../store';

export interface IProps extends Timesheet {
    handleSubmit: () => void;
}

const TimesheetFormComponent = (props: InjectedFormProps<IProps, {}>) => {
    const { invalid, handleSubmit, pristine } = props;
    
    const convenienceDurations = [5, 10, 15, 30, 45, 60];
    
    const flexItemStyles: CSSProperties = {
        margin: '1rem',
    };
    
    const h4Styles: CSSProperties = {
        marginTop: '1rem',
        textAlign: 'left',
    };
    
    const setTimePickerValue = (duration: number) =>
        () => props.change('duration', duration);

    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '50vw',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <div style={flexItemStyles}>
                            <H4 style={h4Styles}>Start</H4>
                            <Field
                                component={renderDateTimePicker}
                                name="startDate"
                            />
                        </div>
                        <Field
                            component={renderTimePicker}
                            name="duration"
                        />
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '1rem'
                        }}>
                            {
                                convenienceDurations.map(duration => (
                                    <Button
                                        key={duration}
                                        intent="none"
                                        onClick={setTimePickerValue(duration)}
                                        style={{
                                            width: '33%',
                                        }}
                                    >
                                        {duration}
                                    </Button>
                                ))
                            }
                        </div>
                        <div style={flexItemStyles}>
                            <Field
                                component={renderTextInput}
                                label="Description"
                                name="description"
                                placeholder="Enter a description..."
                                validate={[
                                    length({ min: 2, max: 60 }),
                                    required(),
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <br />
                
            </div>
            <Button
                type="submit"
                disabled={invalid || pristine}
                intent="primary"
            >
                submit
            </Button>
        </form>
    );
};

export const TimesheetForm = reduxForm({
    form: 'timesheet',
})(TimesheetFormComponent);


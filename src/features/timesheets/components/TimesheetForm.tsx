import { Button, H4 } from '@blueprintjs/core';
import React, { CSSProperties } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderDateTimePicker, renderTextInput, renderTimePicker } from '../../../renderers';
import { Timesheet } from '../store';

export interface IProps extends Timesheet {
    handleSubmit: () => void;
}

const TimesheetFormComponent = (props: InjectedFormProps<IProps, {}>) => {
    const { submitting, handleSubmit, pristine } = props;
    
    const flexItemStyles: CSSProperties = {
        margin: '1rem',
    };
    
    const h4Styles: CSSProperties = {
        marginTop: '1rem',
        textAlign: 'center',
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50vw',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        display: 'flex',
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
                        <div style={flexItemStyles}>
                            <H4 style={h4Styles}>Duration</H4>
                            <Field name="duration" component={renderTimePicker}/>
                        </div>
                    </div>
                </div>
                <br />
                <H4 style={h4Styles} >Title</H4>
                <Field
                    name="description"
                    component={renderTextInput}
                />
            </div>
            <Button
                type="submit"
                disabled={submitting || pristine}
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


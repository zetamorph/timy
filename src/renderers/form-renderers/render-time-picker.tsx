import { TimePicker } from '@blueprintjs/datetime';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderTimePicker = ({ input }: WrappedFieldProps) => (
    <TimePicker
        onChange={input.onChange}
        value={input.value}
        showArrowButtons={true}
    />
);

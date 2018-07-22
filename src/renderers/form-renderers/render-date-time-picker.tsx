import { DateTimePicker } from '@blueprintjs/datetime';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderDateTimePicker = ({ input }: WrappedFieldProps) => (
    <DateTimePicker
        onChange={input.onChange}
        value={input.value || new Date()}
    />
);

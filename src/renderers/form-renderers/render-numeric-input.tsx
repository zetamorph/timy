import { NumericInput } from '@blueprintjs/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderNumericInput = ({ input }: WrappedFieldProps) => (
    <NumericInput
        onChange={input.onChange}
        value={input.value}
    />
);

import { TextArea } from '@blueprintjs/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderTextArea = ({ input }: WrappedFieldProps) => (
    <TextArea
        onChange={input.onChange}
        value={input.value}
    />
);
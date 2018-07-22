import { InputGroup } from '@blueprintjs/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderTextInput = ({ input }: WrappedFieldProps) => (
    <InputGroup
        onChange={input.onChange}
        value={input.value}
    />
);